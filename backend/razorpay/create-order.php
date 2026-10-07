<?php require_once __DIR__ . '/vendor/autoload.php'; 
use Razorpay\Api\Api; 
header('Content-Type: application/json'); 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, OPTIONS'); 
header('Access-Control-Allow-Headers: Content-Type'); 
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') 
{
     http_response_code(200); 
     exit; 
     } 
     if ($_SERVER['REQUEST_METHOD'] !== 'POST') 
     { http_response_code(405); 
     echo json_encode([ 'success' => false, 'message' => 'Method not allowed' ]); 
     exit; 
     } 
     try { 
        $input = json_decode(file_get_contents('php://input'), true); 
        if (!$input) { throw new Exception('Invalid request data'); } 
        $amount = isset($input['amount']) ? (float) $input['amount'] : 0; 
        $frequency = $input['frequency'] ?? 'one-time'; 
        $name = trim($input['name'] ?? ''); 
        $email = trim($input['email'] ?? ''); 
        $phone = trim($input['phone'] ?? ''); 
        if ($amount < 1) { throw new Exception('Invalid donation amount'); } 
        if (!$name || !$email) { throw new Exception('Name and email are required'); } 
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { throw new Exception('Invalid email address'); } 
        /* * Load these from environment variables. */ 
        $keyId = getenv('RAZORPAY_KEY_ID'); 
        $keySecret = getenv('RAZORPAY_KEY_SECRET'); 
        if (!$keyId || !$keySecret) { throw new Exception('Razorpay credentials are not configured'); } 
        $api = new Api($keyId, $keySecret); 
        /* * Razorpay expects amount in paise. * * Example: * ₹1,000 = 100000 paise */ 
        $amountInPaise = (int) round($amount * 100); 
        /* * Keep receipt short. */ 
        $receipt = 'don_' . time() . '_' . random_int(1000, 9999); 
        $orderData = [ 'receipt' => $receipt, 'amount' => $amountInPaise, 'currency' => 'INR', 'notes' => [ 'donor_name' => $name, 'donor_email' => $email, 'donor_phone' => $phone, 'frequency' => $frequency ] ]; 
        $order = $api->order->create($orderData); 
        echo json_encode([ 'success' => true, 'id' => $order['id'], 'amount' => $order['amount'], 'currency' => $order['currency'], 'key_id' => $keyId ]); } catch (Throwable $e) { http_response_code(400); 
        echo json_encode([ 'success' => false, 'message' => $e->getMessage() ]); } ?>
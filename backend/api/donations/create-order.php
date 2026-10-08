<?php
// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

// Database connection using your Database class
require_once __DIR__ . '/../../config/database.php';
$database = new Database();
$pdo = $database->connect();

// Razorpay API Credentials
$key_id = 'rzp_test_TjIsJuI4MtqoXA';
$key_secret = 'cuFKUWvlSqoeFBDKeUv1VvIY';

// Rest of your code...

// Get JSON body from Next.js frontend
$input = json_decode(file_get_contents('php://input'), true);

$amount = isset($input['amount']) ? floatval($input['amount']) : 0;
$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$phone = isset($input['phone']) ? trim($input['phone']) : '';

if ($amount < 1 || empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input data']);
    exit;
}

// Razorpay expects amount in paise (Fixed the syntax error here)
$amountInPaise = intval($amount * 100);
$receiptId = 'rcpt_' . uniqid();

// Create Order via Razorpay API
$url = 'https://api.razorpay.com/v1/orders';
$data = [
    'amount' => $amountInPaise,
    'currency' => 'INR',
    'receipt' => $receiptId,
    'payment_capture' => 1
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERPWD, "$key_id:$key_secret");
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to create Razorpay order']);
    exit;
}

$orderResponse = json_decode($response, true);
$orderId = $orderResponse['id'];

// Save order to MySQL with status 'created'
try {
    $stmt = $pdo->prepare("INSERT INTO donations (order_id, amount, name, email, phone, status) VALUES (?, ?, ?, ?, ?, 'created')");
    $stmt->execute([$orderId, $amount, $name, $email, $phone]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error']);
    exit;
}

echo json_encode([
    'id' => $orderId,
    'amount' => $amountInPaise,
    'currency' => 'INR'
]);
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
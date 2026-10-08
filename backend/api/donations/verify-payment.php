<?php
// 1. CORS headers and preflight handling
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

// 2. Database connection
require_once __DIR__ . '/../../config/database.php';

$database = new Database();
$pdo = $database->connect();

$key_secret = 'cuFKUWvlSqoeFBDKeUv1VvIY';

$input = json_decode(file_get_contents('php://input'), true);

$razorpay_order_id = $input['razorpay_order_id'] ?? '';
$razorpay_payment_id = $input['razorpay_payment_id'] ?? '';
$razorpay_signature = $input['razorpay_signature'] ?? '';
$amount = $input['amount'] ?? 0;
$donor = $input['donor'] ?? [];

if (empty($razorpay_order_id) || empty($razorpay_payment_id) || empty($razorpay_signature)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing signature parameters']);
    exit;
}

// Verify Signature cryptographic hash
$generated_signature = hash_hmac('sha256', $razorpay_order_id . '|' . $razorpay_payment_id, $key_secret);

if (hash_equals($generated_signature, $razorpay_signature)) {
    // Signature matches! Update database status to 'success'
    try {
        $stmt = $pdo->prepare("UPDATE donations SET payment_id = ?, message = ?, anonymous = ?, status = 'success' WHERE order_id = ?");
        $stmt->execute([
            $razorpay_payment_id,
            $donor['message'] ?? '',
            isset($donor['anonymous']) && $donor['anonymous'] ? 1 : 0,
            $razorpay_order_id
        ]);

        echo json_encode(['success' => true, 'message' => 'Payment verified successfully']);
    } catch (\Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Database update failed']);
    }
} else {
    // Invalid Signature
    try {
        $stmt = $pdo->prepare("UPDATE donations SET status = 'failed' WHERE order_id = ?");
        $stmt->execute([$razorpay_order_id]);
    } catch (\Exception $e) {}

    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid payment signature']);
}
?>
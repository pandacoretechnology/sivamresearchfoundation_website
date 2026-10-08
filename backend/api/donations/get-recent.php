<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

require_once __DIR__ . '/../../config/database.php';

try {
    $database = new Database();
    $pdo = $database->connect();

    // Fetch last 10 successful donations
    $stmt = $pdo->prepare("SELECT name, amount, message, anonymous, created_at FROM donations WHERE status = 'success' ORDER BY id DESC LIMIT 10");
    $stmt->execute();
    $donations = $stmt->fetchAll();

    echo json_encode([
        'success' => true,
        'donations' => $donations
    ]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
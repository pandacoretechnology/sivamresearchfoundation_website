<?php require_once __DIR__ . '/vendor/autoload.php';
use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;
header('Content-Type: application/json'); 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') 
{ http_response_code(200); exit; } 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') 
{ http_response_code(405); 
echo json_encode([ 'success' => false, 'message' => 'Method not allowed' ]); 
exit; } 
try { $input = json_decode( file_get_contents('php://input'), true ); 
if (!$input) { 
    throw new Exception('Invalid request data'); 
    }
     $orderId = $input['razorpay_order_id'] ?? ''; 
     $paymentId = $input['razorpay_payment_id'] ?? '';
      $signature = $input['razorpay_signature'] ?? ''; 
      if (!$orderId || !$paymentId || !$signature) { 
        throw new Exception('Missing payment information'); 
        }
         $keyId = getenv('RAZORPAY_KEY_ID'); 
         $keySecret = getenv('RAZORPAY_KEY_SECRET'); 
         if (!$keyId || !$keySecret) { 
            throw new Exception('Razorpay credentials are not configured');
             } 
             $api = new Api( $keyId, $keySecret );
              /* * Razorpay SDK verifies: * * order_id + "|" + payment_id */ 
              $api->utility->verifyPaymentSignature([ 'razorpay_order_id' => $orderId, 'razorpay_payment_id' => $paymentId, 'razorpay_signature' => $signature ]); 
              /* * Signature is valid. * * At this point you can safely mark * the donation as paid in your database. */ 
              $name = trim($input['donor']['name'] ?? '');
               $email = trim($input['donor']['email'] ?? '');
                $phone = trim($input['donor']['phone'] ?? '');
                 $message = trim($input['donor']['message'] ?? '');
                  $anonymous = !empty($input['donor']['anonymous']);
                   $amount = (float) ($input['amount'] ?? 0);
                    $frequency = $input['frequency'] ?? 'one-time'; 
                    /* * TODO: * Save the verified donation to your database here. */
                     echo json_encode([ 'success' => true, 'message' => 'Payment verified successfully', 'payment_id' => $paymentId, 'order_id' => $orderId, 'amount' => $amount, 'currency' => 'INR' ]); 
                     }
                      catch (SignatureVerificationError $e) {
                         http_response_code(400); 
                         echo json_encode([ 'success' => false, 'message' => 'Payment signature verification failed' ]); 
                         }
                          catch (Throwable $e) {
                             http_response_code(400); 
                             echo json_encode([ 'success' => false, 'message' => $e->getMessage() ]); } ?>
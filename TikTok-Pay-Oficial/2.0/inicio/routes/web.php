<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Setting;

Route::get('/', function () {
    $settings = Setting::all()->pluck('value', 'key');
    $taxValue = $settings['registration_tax_value'] ?? '20.19';
    
    return Inertia::render('welcome', [
        'registrationTaxValue' => $taxValue
    ]);
})->name('home');

Route::get('/admin/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/admin/login', [AuthController::class, 'login']);
Route::post('/admin/logout', [AuthController::class, 'logout']);

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/settings', [AdminController::class, 'settings'])->name('admin.settings');
    Route::post('/settings', [AdminController::class, 'updateSettings']);
});

Route::post('/payment/create', [PaymentController::class, 'create']);
Route::get('/payment/status/{reference}', [PaymentController::class, 'checkStatus']);
Route::post('/webhook/paradise', [PaymentController::class, 'webhook']);

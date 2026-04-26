<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'total_paid' => Transaction::where('status', 'approved')->sum('amount') / 100,
            'total_pending' => Transaction::where('status', 'pending')->sum('amount') / 100,
            'count_paid' => Transaction::where('status', 'approved')->count(),
            'count_pending' => Transaction::where('status', 'pending')->count(),
            'recent_transactions' => Transaction::orderBy('created_at', 'desc')->take(10)->get(),
            'webhook_url' => url('/webhook/paradise')
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats
        ]);
    }

    public function settings()
    {
        $settings = Setting::all()->pluck('value', 'key');
        
        return Inertia::render('Admin/Settings', [
            'settings' => $settings
        ]);
    }

    public function updateSettings(Request $request)
    {
        $data = $request->validate([
            'tiktok_pixel_id' => 'nullable|string',
            'paradise_api_key' => 'nullable|string',
            'paradise_product_hash' => 'nullable|string',
            'registration_tax_value' => 'nullable|numeric',
            'seo_title' => 'nullable|string',
            'seo_description' => 'nullable|string',
            'header_scripts' => 'nullable|string',
            'favicon' => 'nullable|image|mimes:ico,png,jpg,jpeg|max:2048',
        ]);

        if ($request->hasFile('favicon')) {
            $file = $request->file('favicon');
            $extension = $file->getClientOriginalExtension();
            $filename = 'favicon.' . $extension;
            
            $file->move(public_path(), $filename);
            
            Setting::updateOrCreate(
                ['key' => 'favicon_path'],
                ['value' => $filename]
            );
        }

        $settingsToSave = $request->only([
            'tiktok_pixel_id', 
            'paradise_api_key', 
            'paradise_product_hash', 
            'registration_tax_value',
            'seo_title',
            'seo_description',
            'header_scripts'
        ]);

        foreach ($settingsToSave as $key => $value) {
            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        return back()->with('success', 'Configurações atualizadas com sucesso!');
    }
}

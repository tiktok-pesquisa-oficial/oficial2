<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @php
            $settings = \App\Models\Setting::all()->pluck('value', 'key');
            $favicon = $settings['favicon_path'] ?? 'favicon.ico';
            $pixelId = $settings['tiktok_pixel_id'] ?? null;
            $seoTitle = $settings['seo_title'] ?? 'TikTok Pay - Oficial';
            $seoDescription = $settings['seo_description'] ?? 'Ganhe dinheiro respondendo pesquisas rápidas no TikTok.';
            $headerScripts = $settings['header_scripts'] ?? '';
        @endphp

        <title>{{ $seoTitle }}</title>
        <meta name="description" content="{{ $seoDescription }}">

        <link rel="icon" type="image/x-icon" href="{{ asset($favicon) }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- Scripts Adicionais do Admin -->
        {!! $headerScripts !!}

        <!-- TikTok Pixel -->
        @if($pixelId)
        <script>
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t.rd_oris=e.rd_oris;var n=d.createElement("script");n.type="text/javascript",n.async=!0,n.src=e.sdk_url;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
          ttq.load('{{ $pixelId }}');
          ttq.page();
        }(window, document, 'ttq');
        </script>
        @endif

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

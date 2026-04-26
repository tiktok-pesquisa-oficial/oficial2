/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/functions/onLoad.ts
/**
 * Executes a function when the document is loaded
 * @param fn Function to execute
 */
function onLoad(fn) {
    if (isDocumentLoaded()) {
        return fn();
    }
    window.addEventListener("load", fn);
}
/**
 * Checks if the document is already loaded
 */
function isDocumentLoaded() {
    return document.readyState === 'complete';
}

;// ./src/functions/watch.ts

function mutationWatch(query, process, root = document) {
    onLoad(() => {
        // Process existing iframes when page loads
        process(root.querySelectorAll(query));
        // Set up observer for dynamically added iframes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // Check for added nodes
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        // Check if the added node is an iframe
                        if (node instanceof Element) {
                            if (node.matches(query)) {
                                process([node]);
                            }
                            // Check if the added node contains iframes
                            process(node.querySelectorAll(query));
                        }
                    });
                }
            });
        });
        // Start observing the entire document for changes
        observer.observe(root, {
            childList: true, // Watch for changes to the direct children
            subtree: true // Watch for changes in the entire subtree
        });
        // Function to process iframes and add parent URL parameters
    });
}

;// ./src/functions/storage.ts
function context(name) {
    const context = this;
    return {
        get() {
            return context.get(name);
        },
        set(value) {
            return context.set(name, value);
        }
    };
}
function createStore(storage) {
    return {
        context,
        get(key) {
            return storage.getItem(key) ?? undefined;
        },
        set(key, value) {
            storage.setItem(key, value);
        },
    };
}
function asConst() {
    return (source) => source;
}
const stores = asConst()({
    local: createStore(localStorage),
    session: createStore(sessionStorage),
});

;// ./src/functions/safeTry.ts
function safeTry(fn, $default) {
    try {
        return fn();
    }
    catch {
        return $default;
    }
}

;// ./src/functions/initUTMHandler.ts



 // Import the navigation types

function initUTMHandler(hardCodedConfig) {
    const config = {
        'token': '',
        'clickIdParams': ['click_id', 'ttclid', 'fbclid', 'gclid'], // Support Kwai, TikTok, Facebook, Google
        'stepId': 'initial',
        'currentUrl': new URL(window.location.href),
        'fingerPrintId': undefined,
        'apiEndpoint': "https://view.xtracky.dev/api/analytics/view" || 0,
    };
    const UTM_SOURCE_PARAM = 'utm_source';
    function getLeadIdStorageKey() {
        return `XTRACKY_LEAD_ID_${config.token}`;
    }
    function initializeFromScript() {
        const currentScript = getCurrentScript();
        if (currentScript) {
            Object.assign(config, {
                token: getDataToken() || '',
                stepId: currentScript.getAttribute("data-step-id") || 'initial',
                currentUrl: new URL(window.location.href),
            });
        }
    }
    function getCurrentScript() {
        const currentScript = document.currentScript;
        return currentScript;
    }
    function getDataToken() {
        const script = getCurrentScript();
        return script?.getAttribute("data-token");
    }
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function getUrlParameters() {
        // Returns the URLSearchParams converted to an object
        const params = Object.fromEntries(new URLSearchParams(window.location.search));
        // If this is a Facebook click (has fbclid), add _fbp cookie if it exists
        if (params['fbclid']) {
            const fbp = getCookie('_fbp');
            if (fbp) {
                params['_fbp'] = fbp;
            }
        }
        return params;
    }
    function detectClickId(urlParams) {
        // Check if any of the supported click ID parameters exist
        for (const clickIdParam of config.clickIdParams) {
            if (urlParams[clickIdParam]) {
                return urlParams[clickIdParam];
            }
        }
        return null;
    }
    function updateUrlWithLeadId(leadId) {
        // Preserve existing query parameters and update/set only utm_source
        const newUrl = new URL(window.location.href);
        // Get existing URLSearchParams to preserve all current query parameters
        const searchParams = new URLSearchParams(newUrl.search);
        // Set or update only the utm_source parameter
        searchParams.set(UTM_SOURCE_PARAM, leadId);
        newUrl.search = searchParams.toString();
        window.history.replaceState({}, '', newUrl.toString());
        config.currentUrl = newUrl;
    }
    function updateAllLinksWithLeadId(leadId) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (!link.href || link.href.startsWith('#') || link.href.startsWith('javascript:')) {
                return;
            }
            try {
                const url = new URL(link.href);
                // Update ALL links (internal and external)
                url.searchParams.set(UTM_SOURCE_PARAM, leadId);
                link.href = url.href;
            }
            catch (e) {
                // Invalid URL, skip
            }
        });
    }
    async function dispatch(data) {
        if (hasPrevious(data)) {
            return null;
        }
        return run();
        function hasPrevious(data) {
            const PREVIOUS_STORAGE_KEY = 'PREVIOUS_PAGE_VIEW';
            const list = JSON.parse(sessionStorage.getItem(PREVIOUS_STORAGE_KEY) ?? '[]');
            const previous = new Set(list);
            const current = JSON.stringify(data);
            if (previous.has(current))
                return true;
            previous.add(current);
            sessionStorage.setItem(PREVIOUS_STORAGE_KEY, JSON.stringify([...previous.values()]));
            return false;
        }
        async function run() {
            const endpoint = config.apiEndpoint;
            try {
                console.log('VIEW', { data, endpoint });
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data),
                    signal: AbortSignal.timeout(10000),
                    keepalive: true
                });
                const result = await response.json();
                console.log('VIEW Response', result);
                if (result.success && result.leadId) {
                    return result.leadId;
                }
                return null;
            }
            catch (error) {
                console.warn('Erro ao enviar view:', error);
                return null;
            }
        }
    }
    async function handleUtmParameters() {
        const store = stores.local.context(getLeadIdStorageKey());
        const urlParams = getUrlParameters();
        // Check if we have a NEW click ID from any platform (PRIORITY #1)
        const clickId = detectClickId(urlParams);
        console.log({ urlParams, clickId, detectedPlatform: clickId ? 'yes' : 'no' });
        // Check if we already have a stored leadId
        const storedLeadId = store.get();
        // If we have a NEW click ID, process it ONLY if we don't have a stored leadId
        if (clickId && !storedLeadId) {
            // Convert URL params to URLSearchParams string format
            const urlParamsString = new URLSearchParams(urlParams).toString();
            // Build the dispatch data with ALL URL params as URLSearchParams string
            const dispatchData = {
                step_id: config.stepId,
                href: config.currentUrl.href,
                product_id: config.token,
                finger_print_id: config.fingerPrintId ?? await initFingerPrint.promise.promise,
                url_params: urlParamsString, // Send ALL URL parameters as string
            };
            // Send to backend and get leadId
            const leadId = await dispatch(dispatchData);
            if (leadId) {
                console.log('Received NEW leadId from backend', leadId);
                // Save to localStorage (overwrite previous)
                store.set(leadId);
                // Update URL to only have utm_source=leadId
                updateUrlWithLeadId(leadId);
                // Update all links on the page
                updateAllLinksWithLeadId(leadId);
            }
            return;
        }
        // If we have click ID but already have stored leadId, just use the stored one
        if (clickId && storedLeadId) {
            console.log('Click ID detected but using existing leadId from localStorage', storedLeadId);
            updateUrlWithLeadId(storedLeadId);
            updateAllLinksWithLeadId(storedLeadId);
            return;
        }
        // No new click ID, check if we have stored leadId or utm_source in URL
        const utmSourceInUrl = urlParams[UTM_SOURCE_PARAM];
        // If we have utm_source in URL and it matches stored, just propagate it
        if (utmSourceInUrl && storedLeadId && utmSourceInUrl === storedLeadId) {
            console.log('Using existing leadId from URL', utmSourceInUrl);
            updateAllLinksWithLeadId(storedLeadId);
            return;
        }
        // If we have stored leadId but no utm_source in URL, restore it
        if (storedLeadId && !utmSourceInUrl) {
            console.log('Restoring leadId from localStorage', storedLeadId);
            updateUrlWithLeadId(storedLeadId);
            updateAllLinksWithLeadId(storedLeadId);
            return;
        }
        // No click ID, no stored leadId, no utm_source - nothing to do
        console.log('No tracking data available');
    }
    async function dynamicImport(name) {
        return new Function(`return import("${name}")`)();
    }
    function withResolvers() {
        const config = {};
        config.promise = new Promise((resolve, reject) => {
            Object.assign(config, { resolve, reject });
        });
        return config;
    }
    initFingerPrint.promise = withResolvers();
    async function initFingerPrint() {
        config.fingerPrintId = await getFingerPrintId();
        initFingerPrint.promise.resolve(config.fingerPrintId);
    }
    async function getFingerPrintId() {
        const FingerprintJS = await dynamicImport('https://cdn.skypack.dev/@fingerprintjs/fingerprintjs@4.0.1').then(res => res.default);
        const fingerPrint = await FingerprintJS.load().then((res) => res.get());
        const id = fingerPrint.visitorId;
        return id;
    }
    onMount();
    async function onMount() {
        onLoad(sendTrackingData);
        initializeFromScript();
        initFingerPrint();
        await onLoad(handleUtmParameters);
        initWatch();
    }
    async function sendTrackingData() {
        try {
            // Get current URL and parse parameters
            const urlParams = new URLSearchParams(window.location.search);
            // Collect parameters from URL
            const trackingData = {
                campaign_id: "15d2d52b-7bc3-4aa5-b5f8-2aa61d8ff659",
                final_url: urlParams.get('final_url') || window.location.href,
                utm_source: urlParams.get('utm_source'),
                utm_medium: urlParams.get('utm_medium'),
                utm_campaign: urlParams.get('utm_campaign'),
                utm_term: urlParams.get('utm_term'),
                utm_content: urlParams.get('utm_content'),
                click_id: urlParams.get('click_id'), // Kwai click ID
                gclid: urlParams.get('gclid'), // Google click ID
                fbclid: urlParams.get('fbclid'), // Facebook click ID
                ttclid: urlParams.get('ttclid') // TikTok click ID
            };
            const response = await fetch('https://api.traki.io/v1/traces/xtracky', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer tk_MhPRG01K_01K9gT5WSR0dJZhyNQJZ0BRCmw'
                },
                body: JSON.stringify(trackingData)
            });
            const data = await response.json();
            // console.log('Tracking successful:', data);
            return data;
        }
        catch (error) {
            // console.error('Tracking error:', error);
        }
    }
    function initWatch() {
        if (hardCodedConfig.shouldEnableInterception)
            initNavigationInterception();
        // Watch for iframes and pass through utm_source
        mutationWatch('iframe', iframes => iframes.forEach(iframe => {
            if (iframe.src) {
                const store = stores.local.context(getLeadIdStorageKey());
                const leadId = store.get();
                if (leadId) {
                    const url = new URL(iframe.src);
                    url.searchParams.set(UTM_SOURCE_PARAM, leadId);
                    iframe.src = url.href;
                }
            }
        }));
        // Watch for new links added dynamically
        mutationWatch('a', links => {
            const store = stores.local.context(getLeadIdStorageKey());
            const leadId = store.get();
            if (leadId) {
                updateAllLinksWithLeadId(leadId);
            }
        });
    }
    function isIframe() {
        try {
            return window.self !== window.top;
        }
        catch (e) {
            return true;
        }
    }
    function initNavigationInterception() {
        interceptWindowOpen();
        startRun();
        function interceptWindowOpen() {
            if (!isIframe())
                return;
            const currentWindow = window;
            const previousOpen = currentWindow.open;
            window.open = function open(input, target, ...others) {
                if (isIframe() && target === '_top') {
                    const url = safeFactoryURL(input);
                    if (url)
                        return previousOpen.call(this, getURL(url.href), target, ...others);
                }
                return previousOpen.apply(this, arguments);
            };
        }
        function startRun() {
            polyfill();
            if (window.navigation)
                return run();
            window.addEventListener('navigationReady', run);
            function run() {
                let lastURL;
                window.navigation?.addEventListener("navigate", (event) => {
                    const navigation = window.navigation;
                    if (!event?.destination?.url)
                        return;
                    safeTry(() => {
                        event.destination.url = event?.destination?.url?.href ?? event?.destination?.url;
                    });
                    if (!shouldIntercept(event))
                        return;
                    event.preventDefault();
                    redirect(event, getURL(event.destination.url));
                    function redirect(event, url) {
                        const shouldRefresh = !event.destination.sameDocument;
                        lastURL = url;
                        if (shouldRefresh)
                            return navigation.navigate(url, { history: event.navigationType === 'push' ? 'push' : event.navigationType === 'replace' ? 'replace' : 'auto' });
                        history.pushState({}, '', url);
                    }
                    function shouldIntercept(event) {
                        return lastURL !== event.destination.url;
                    }
                });
            }
        }
        function getRelevantQuerySearch() {
            const searchParams = new URLSearchParams(window.location.search);
            return omitNullish(Object.fromEntries([UTM_SOURCE_PARAM].map(id => [id, getQuerySearchParam(id, searchParams)])));
        }
        function getQuerySearchParam(id, searchParams = new URLSearchParams(window.location.search)) {
            return searchParams.get(id) ?? undefined;
        }
        function omitNullish(source) {
            const content = {};
            for (const name in source)
                if (source[name] != null)
                    content[name] = source[name];
            return content;
        }
        function getURL(to) {
            return mergeURLSearchs({ url: to, search: [new URLSearchParams(getRelevantQuerySearch()), to] });
            function mergeURLSearchs({ url, search }) {
                const main = new URL(url);
                const searchConfig = omitNullish(Object.assign({}, ...search.map(getSearchParams).map(Object.fromEntries)));
                main.search = new URLSearchParams(searchConfig).toString();
                return main.href;
                function getSearchParams(url) {
                    if (url instanceof URLSearchParams)
                        return url;
                    if (url instanceof URL)
                        return url.searchParams;
                    return safeFactoryURL(url)?.searchParams ?? new URLSearchParams(url);
                }
            }
        }
        function safeFactoryURL(url) {
            try {
                if (url instanceof URL)
                    return url;
                return new URL(url);
            }
            catch {
                return;
            }
        }
        function polyfill() {
            if (!window.navigation) {
                // Dynamically load the polyfill only if needed
                const polyfillScript = document.createElement('script');
                polyfillScript.type = 'module';
                polyfillScript.textContent = `
                    // Import the polyfill from Skypack
                    import * as navigationPolyfill from 'https://cdn.skypack.dev/navigation-api-polyfill';
                    window.dispatchEvent(new Event('navigationReady'));
                `;
                document.head.appendChild(polyfillScript);
            }
            else {
                // Navigation API is natively supported, dispatch ready event immediately
                window.dispatchEvent(new Event('navigationReady'));
            }
        }
    }
}
function keys(source) {
    return Object.keys(source);
}

;// ./src/export/utm-handler.ts

// Initialize the UTM handler for multi-platform tracking
// Supports: Kwai (click_id), TikTok (ttclid), Facebook (fbclid), Google (gclid)
initUTMHandler({
    shouldEnableInterception: false,
});

/******/ })()
;
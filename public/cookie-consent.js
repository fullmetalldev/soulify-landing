/*
 * Cookie consent for Google Analytics. GA is only loaded after the visitor clicks "Accept".
 * Usage: <script src="/cookie-consent.js" data-ga-id="G-XXXX" data-privacy-url="/privacy" defer></script>
 * The choice is stored in a first-party cookie shared by soulify.chat and its subdomains, so visitors are
 * asked once. window.soulifyCookieSettings() shows the banner again (e.g. from a "Cookie settings" link).
 * The same file lives in soulify-app-frontend/public and soulify-landing/public; keep them in sync.
 */
(function () {
    var script = document.currentScript;
    var GA_ID = script && script.getAttribute('data-ga-id');
    var PRIVACY_URL = (script && script.getAttribute('data-privacy-url')) || '/privacy';
    var COOKIE = 'soulify_consent';

    function readChoice() {
        var match = document.cookie.match(new RegExp('(?:^|; )' + COOKIE + '=([^;]*)'));
        return match ? match[1] : null;
    }

    function saveChoice(value) {
        var domain = /(^|\.)soulify\.chat$/.test(location.hostname) ? '; domain=.soulify.chat' : '';
        document.cookie = COOKIE + '=' + value + '; max-age=31536000; path=/; SameSite=Lax' + domain +
            (location.protocol === 'https:' ? '; Secure' : '');
    }

    var gaLoaded = false;
    function loadAnalytics() {
        if (gaLoaded || !GA_ID) return;
        gaLoaded = true;
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', GA_ID);
        var tag = document.createElement('script');
        tag.async = true;
        tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
        document.head.appendChild(tag);
    }

    var STYLE = '' +
        '#soulify-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;display:flex;justify-content:center;font-family:Inter,system-ui,-apple-system,sans-serif}' +
        '#soulify-consent .sc-card{width:min(560px,100%);display:flex;align-items:center;gap:16px;padding:16px 18px;border-radius:18px;background:#fff;border:1px solid #E9EAF0;box-shadow:0 24px 60px -12px #00000040;animation:sc-in .25s ease-out}' +
        '#soulify-consent p{flex:1;margin:0;font-size:14px;line-height:1.5;color:#6B7280}' +
        '#soulify-consent a{color:#155dfc;text-decoration:underline}' +
        '#soulify-consent .sc-buttons{display:flex;gap:8px;flex-shrink:0}' +
        '#soulify-consent button{padding:9px 16px;border-radius:12px;font:600 14px Inter,system-ui,sans-serif;cursor:pointer;border:1px solid #E9EAF0;background:#fff;color:#111827}' +
        '#soulify-consent button.sc-accept{border-color:transparent;background:linear-gradient(to right,#155dfc,#9810fa);color:#fff}' +
        '@keyframes sc-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
        '@media (max-width:560px){#soulify-consent .sc-card{flex-direction:column;align-items:stretch}#soulify-consent .sc-buttons button{flex:1}}';

    function showBanner() {
        if (document.getElementById('soulify-consent')) return;
        if (!document.getElementById('soulify-consent-style')) {
            var style = document.createElement('style');
            style.id = 'soulify-consent-style';
            style.textContent = STYLE;
            document.head.appendChild(style);
        }
        var banner = document.createElement('div');
        banner.id = 'soulify-consent';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.innerHTML =
            '<div class="sc-card">' +
            '<p>We\'d like to use analytics cookies to understand how Soulify is used and improve it. ' +
            'They\'re only set if you allow them. <a href="' + PRIVACY_URL + '">Privacy policy</a></p>' +
            '<div class="sc-buttons">' +
            '<button type="button" class="sc-decline">Decline</button>' +
            '<button type="button" class="sc-accept">Accept</button>' +
            '</div></div>';
        banner.querySelector('.sc-accept').addEventListener('click', function () {
            saveChoice('granted');
            banner.remove();
            loadAnalytics();
        });
        banner.querySelector('.sc-decline').addEventListener('click', function () {
            saveChoice('denied');
            banner.remove();
        });
        document.body.appendChild(banner);
    }

    window.soulifyCookieSettings = showBanner;

    var choice = readChoice();
    if (choice === 'granted') {
        loadAnalytics();
    } else if (choice !== 'denied') {
        if (document.body) showBanner();
        else document.addEventListener('DOMContentLoaded', showBanner);
    }
})();

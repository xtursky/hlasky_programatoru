let devMode = document.location.hostname.search("localhost") >= 0;

const GOOGLE_ANALYTICS_KEY = '';
const HOTJAR_ID = '';
const LOGGLY_KEY = '';

if (devMode) {
	console.info('Development mode. Tracking not applied.');

} else {
    /* GOOGLE ANALYTICS - user analytics */
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', GOOGLE_ANALYTICS_KEY, 'auto');
    ga('set', 'anonymizeIp', true); // GDPR
    ga('send', 'pageview');


    /* HOTJAR - recordings, heatmaps */
    (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings = {hjid: HOTJAR_ID, hjsv: 5};
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');

    /* LOGGLY - error logs */
    (function (window, document, src, headElement, logglyScriptElement) {
        headElement = document.getElementsByTagName('head')[0];
        logglyScriptElement = document.createElement('script');
        logglyScriptElement.async = 1;
        logglyScriptElement.src = src;
        headElement.appendChild(logglyScriptElement);

        logglyScriptElement.onload = function() {
            _LTracker = _LTracker || [];
            _LTracker.push({
                'logglyKey': LOGGLY_KEY,
                'sendConsoleErrors' : true,
                'tag' : 'example-logs'
            });
        }
    })(window, document, '//cloudfront.loggly.com/js/loggly.tracker-latest.min.js');
}

"use strict";var precacheConfig=[["index.html","40ebbb81440b9d34cc920623b1845c9f"],["service-worker.js","d142be73cd8e506dd06ff98600b348cc"],["static/css/app.ee945155f630c960f37e6ab808ef6fb0.css","ee945155f630c960f37e6ab808ef6fb0"],["static/img/DSC02322.png","dc484894fc100af9b6578a17c8c16227"],["static/img/DSC02351.png","165a010d322cbcde8cebc62b450bef88"],["static/img/DSC02369.png","4edf897596db38394bfab86fa6a9c97f"],["static/img/DSC02448.png","9d5914a9825a75bc75a4bc554f221234"],["static/img/DSC02564.png","7584a70989b543e156ac16b2c75b9bbe"],["static/img/DSC04495.png","c50e1462c8fdf2a8ef5f8e1efdb2347b"],["static/img/DSC04524.png","e52c468a1b2726ed176e4afbe46ef2a9"],["static/img/DSC04534.png","a99a1594bd12086f2cbef9e486303b0c"],["static/img/icons/android-chrome-192x192.png","a9634860d701f2e860e86f69297cc500"],["static/img/icons/android-chrome-512x512.png","dca54d6ba1c2a3cabbbc1c7ab37e1d86"],["static/img/icons/apple-touch-icon-120x120.png","fbe07addd5363ed23adc7a02310b111b"],["static/img/icons/apple-touch-icon-152x152.png","5398346194033e370c827e267a208749"],["static/img/icons/apple-touch-icon-180x180.png","f54c259dd63c57f7cb9d14ace1a2409a"],["static/img/icons/apple-touch-icon-60x60.png","3bcc143ead79430e1e87c17a1d98d5ec"],["static/img/icons/apple-touch-icon-76x76.png","51c35620501b893f94a772c3bb15dd4f"],["static/img/icons/apple-touch-icon.png","f54c259dd63c57f7cb9d14ace1a2409a"],["static/img/icons/favicon-16x16.png","497d032db70fe61eb5379ef703c2d784"],["static/img/icons/favicon-32x32.png","89a7d386cad701eff6a2df43efe3362b"],["static/img/icons/icon-128x128.png","0c70f7c97ab79135e2433291779e33eb"],["static/img/icons/icon-144x144.png","338698a6edee782e09a5c82926b84c71"],["static/img/icons/icon-152x152.png","5398346194033e370c827e267a208749"],["static/img/icons/icon-192x192.png","a9634860d701f2e860e86f69297cc500"],["static/img/icons/icon-384x384.png","f94f1f83ae2c4bd55961ce7086271451"],["static/img/icons/icon-512x512.png","dca54d6ba1c2a3cabbbc1c7ab37e1d86"],["static/img/icons/icon-72x72.png","44efa5242b7026f13e9e66e8c0ff426f"],["static/img/icons/icon-96x96.png","4a341048ba1e8e1b9bedaa9396cb22a4"],["static/img/icons/msapplication-icon-144x144.png","338698a6edee782e09a5c82926b84c71"],["static/img/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["static/js/app.ef5f6660176464e7cdd7.js","b6214ebae4f2e9ccfc3c4e23433f44b9"],["static/js/manifest.3b35ab3f6a6aeb77480c.js","4339e47b41df3c42eecd65e50d1b3bc4"],["static/js/vendor.cdebcb6bfa317780c664.js","bf437f0c535c0010d19bef645edb3067"]],cacheName="sw-precache-v3-vuepwa-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=c),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(c){return new Response(c,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,c,t,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return c.every(function(c){return!c.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],t=e[1],n=new URL(c,self.location),a=createCacheKey(n,hashParamName,t,!1);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(c){if(!c.ok)throw new Error("Request for "+t+" returned a response with status "+c.status);return cleanResponse(c).then(function(c){return e.put(t,c)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!c.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var c,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(c=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),c=urlsToCacheKeys.has(t));0,c&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(c){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,c),fetch(e.request)}))}});
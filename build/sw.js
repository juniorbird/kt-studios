"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/7e347634b02dc422307029be760b548a.png","7e347634b02dc422307029be760b548a"],["/a7f6804e71e7f6c52eb51edb8494781c.jpg","a7f6804e71e7f6c52eb51edb8494781c"],["/assets/KT.png","7e347634b02dc422307029be760b548a"],["/assets/dots.jpg","a7f6804e71e7f6c52eb51edb8494781c"],["/assets/favicon.ico","168ddf91b3e0dbe7e85dd8cee9ca6b42"],["/assets/icons/android-icon-144x144.png","9314ad7765683a45bbb8a9eb7d4d9f97"],["/assets/icons/android-icon-192x192.png","1179b15fc6fe2d0125f269d28251019b"],["/assets/icons/android-icon-36x36.png","8a0b577e16a66d786322a41f943bd65b"],["/assets/icons/android-icon-48x48.png","d7d71c86c40937b9d22edd993a06135d"],["/assets/icons/android-icon-72x72.png","1ba7a2e04bc5079a777490c39a431374"],["/assets/icons/android-icon-96x96.png","4f03874a22dd7638222f50db22ee8f7b"],["/assets/icons/apple-icon-114x114.png","20e79e5f4e62b3c7481d5be49b9c62d4"],["/assets/icons/apple-icon-120x120.png","349818962a05a1183d411bcd568e62ad"],["/assets/icons/apple-icon-144x144.png","9314ad7765683a45bbb8a9eb7d4d9f97"],["/assets/icons/apple-icon-152x152.png","03b382e233a2d2d964e46aadbf7e7fdd"],["/assets/icons/apple-icon-180x180.png","d023ee88c3ba2760811841b96772daa2"],["/assets/icons/apple-icon-57x57.png","12900794f403fb10d499240fbfd73a31"],["/assets/icons/apple-icon-60x60.png","2d657da2913a45a21d053199f5fe829d"],["/assets/icons/apple-icon-72x72.png","1ba7a2e04bc5079a777490c39a431374"],["/assets/icons/apple-icon-76x76.png","06edc2f50700ab33e3b0ddee04cc79b9"],["/assets/icons/apple-icon-precomposed.png","4607d4bcc9b243fa3068f5a50c0320e8"],["/assets/icons/apple-icon.png","4607d4bcc9b243fa3068f5a50c0320e8"],["/assets/icons/browserconfig.xml","653d077300a12f09a69caeea7a8947f8"],["/assets/icons/favicon-32x32.png","be011539429fb1142aed71b3bf1d6f63"],["/assets/icons/favicon-96x96.png","4f03874a22dd7638222f50db22ee8f7b"],["/assets/icons/logo.png","d82da2ff44ef827eae7dc50d591651c0"],["/assets/icons/manifest.json","b58fcfa7628c9205cb11a1b2c3e8f99a"],["/assets/icons/ms-icon-144x144.png","9314ad7765683a45bbb8a9eb7d4d9f97"],["/assets/icons/ms-icon-150x150.png","4877e40488a60e1cabc9761fa5441a50"],["/assets/icons/ms-icon-310x310.png","f9bdad496ce5c91268dcf6fcee31e460"],["/assets/icons/ms-icon-70x70.png","7cd30a7ead659dca7381d5480db96a19"],["/assets/logo.png","d82da2ff44ef827eae7dc50d591651c0"],["/b7c9e1e479de3b53f1e4e30ebac2403a.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/bundle.ffc0d.js","ed249f9cf14ee3cdeca95b1275d25c56"],["/c5cd7f5300576ab4c88202b42f6ded62.gif","c5cd7f5300576ab4c88202b42f6ded62"],["/ced611daf7709cc778da928fec876475.eot","ced611daf7709cc778da928fec876475"],["/d41f55a78e6f49a5512878df1737e58a.ttf","d41f55a78e6f49a5512878df1737e58a"],["/f97e3bbf73254b0112091d0192f17aec.svg","f97e3bbf73254b0112091d0192f17aec"],["/favicon.ico","168ddf91b3e0dbe7e85dd8cee9ca6b42"],["/index.html","fc3dcd455a9328b7a4f8377bf49e4472"],["/manifest.json","17bfbcfa397587f514ba1750ec512342"],["/route-home.chunk.ff3bd.js","86ec9a1b8c368bd09eb784182ce93348"],["/route-profile.chunk.4687b.js","614a2f6d7474e469a256289293af1079"],["/style.9c9f0.css","9cfa103a6f84e03f5ded80f5eaff25ff"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],s=new URL(a,self.location),c=createCacheKey(s,hashParamName,n,!1);return[s.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var s=new Request(n,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
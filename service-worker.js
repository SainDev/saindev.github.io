"use strict";var precacheConfig=[["5d5d9eefa31e5e13a6610d9fa7a283bb.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["assets/favicon.ico","e166d641da64a3303423a1f743003c01"],["assets/images/icons/icon-128x128.png","39045526fe69acc36fe33eceb5d48192"],["assets/images/icons/icon-144x144.png","a89c315fe135337eeee10ef009fddd4b"],["assets/images/icons/icon-152x152.png","a322badcf18b3b2887b20ea56f28f074"],["assets/images/icons/icon-192x192.png","a68dbe5b887d3696c290ff5df93def5c"],["assets/images/icons/icon-384x384.png","7d40f1d4629d040e0e1b139d2a2aacb5"],["assets/images/icons/icon-512x512.png","346b5f3d657d5db9238ea52e0baf6032"],["assets/images/icons/icon-72x72.png","77a914108424375aafd296f51107d7f2"],["assets/images/icons/icon-96x96.png","c41b3b363d2154d4364858efa2ebad6c"],["assets/manifest.json","13177523a5bd42854d42f2efd27821dd"],["index.html","0df27c219db519a0e644e77d71442f45"],["main.js","d5518b985e749f7b6b584a14dc4a2813"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),s=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});
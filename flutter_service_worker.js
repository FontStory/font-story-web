'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "83d0918727a8c69b6c683d8152a9cd61",
"assets/AssetManifest.bin.json": "15305f48e03464e6a1cf781a4c451f9b",
"assets/AssetManifest.json": "af81209911b460672638d71ba97a3f0e",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/vazirmatn/Vazirmatn-Black.ttf": "2d636c4cbe22002a0f4bf918353d33af",
"assets/assets/fonts/vazirmatn/Vazirmatn-Bold.ttf": "21e9b423e0a84275e89eb2990cb2a547",
"assets/assets/fonts/vazirmatn/Vazirmatn-ExtraBold.ttf": "9177b0b82ad68b6ca61a437c615efe74",
"assets/assets/fonts/vazirmatn/Vazirmatn-ExtraLight.ttf": "f0c03e9fe33f70fb67e95b7e6b16a7e8",
"assets/assets/fonts/vazirmatn/Vazirmatn-Light.ttf": "7c26b345e0702c8af4cea9757c5b92a8",
"assets/assets/fonts/vazirmatn/Vazirmatn-Medium.ttf": "975b959037d130f6da249ede99088d47",
"assets/assets/fonts/vazirmatn/Vazirmatn-Regular.ttf": "8f2848bf65df549bbfae40abbb005e56",
"assets/assets/fonts/vazirmatn/Vazirmatn-SemiBold.ttf": "3759931a79d70ede02f62811a9637eb1",
"assets/assets/fonts/vazirmatn/Vazirmatn-Thin.ttf": "d61b338c32acbea0fa8c3b5b8ceba1a6",
"assets/assets/icons/instagram.svg": "188a001d0dadd21a402a5bbe3749ea70",
"assets/assets/icons/telegram.svg": "74e950f1ed61ffca40ed43988b0ec713",
"assets/assets/icons/whatsapp.svg": "600b97dc8574db0cb87126b0c7c9a0c2",
"assets/assets/images/color_wheel.png": "2101ab73a86f1266af7126b3604c3878",
"assets/assets/images/splash.png": "313484ddbd94128f2f2099443f8b53f2",
"assets/assets/translations/en-US.json": "7cad632c0faa9306cbf62047055d4931",
"assets/assets/translations/fa-IR.json": "b4a90850e044b577c974e4b8c7561b9c",
"assets/FontManifest.json": "b66ac0f0065cfada3824e1187b8eea28",
"assets/fonts/MaterialIcons-Regular.otf": "40d21578396bc733769169c13dd7aecb",
"assets/NOTICES": "7a80866f348582b3df433d8363f9091c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "2758fb16eabbc0cdffc987b82b956206",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "b93f0863a308739d69bf99a2b25bfe39",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "75f483d9dbb9a001ef19085c171f288b",
"FontModel.fromNestedJson.js": "1a3ef76c0c83f5e353b17360e69037d0",
"icons/apple-touch-icon.png": "be3d551e5e89ec6387c1c29e2d9d0730",
"icons/favicon.ico": "b93f0863a308739d69bf99a2b25bfe39",
"icons/icon-192-maskable.png": "32dc4dbd75289e7c7539b179c7dc57f2",
"icons/Icon-192.png": "28d9863dbbea70660a691e278bc30743",
"icons/icon-512-maskable.png": "927ebc3aa4de9f69f8fae50174593aa6",
"icons/Icon-512.png": "12cc5750f82ba9a570ea27e6ab8a3c25",
"index.html": "fc40a7ebb7e1ffa17276448ff6623a63",
"/": "fc40a7ebb7e1ffa17276448ff6623a63",
"main.dart.js": "36376164957109249726a5de542333e0",
"manifest.json": "4f4c31e7c98b0e21a326bdfd42f3ff1e",
"TextStylePresetModel.parseListOfStyles.js": "36f7b459fdd3749adb8a374a2c8c7c68",
"version.json": "d72cdde3e5a6f8fb69d697162b309386"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

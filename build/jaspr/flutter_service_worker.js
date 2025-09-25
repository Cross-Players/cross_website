'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "96a495e9ddf9fe31e2cb4e755f3feb84",
"version.json": "da1ebd65845d69442300fffc98a6ebc8",
"favicon.ico": "efec2cd56fe3a9bd55ef3925f247797c",
"index.html": "24ef52c885d8b888dc1603b6b2e7ffd8",
"/": "24ef52c885d8b888dc1603b6b2e7ffd8",
"images/email_marketing.png": "9e503dc9a44dcc12835f182dd74324a5",
"images/content_creation.png": "f707f033e43dd6aef32313676c87e312",
"images/mission.png": "0eb57d0412c39a25274e4ed0a536b60f",
"images/learn_more_blue_icon.svg": "519e5c39641b95a602b36c0d2a1330e8",
"images/employee_supply_image.svg": "08be632e96fab2de940ea9d790961c27",
"images/anylytics_and_tracking.png": "4aed43259bf325099f14cac01e6a57bc",
"images/dangtung.png": "24433116399380446994f9699c211ff8",
"images/office1.jpg": "044aaf7a8dd519aa20a78b84e26f0591",
"images/vision.png": "2a666fa2b2042ad66f35c7b38eb3b690",
"images/flags/jp.svg": "22e3b3a4abbb24945620817fd27ed7db",
"images/flags/kr.svg": "2a183310b78d3d4fe57f88abcc491fcd",
"images/flags/us.svg": "1d23b9509d0a0a828e3071096b0d2edf",
"images/flags/vn.svg": "076d59568fc7a8ab59bc51ee7a39f956",
"images/learn_more_green_icon.svg": "6cf0a5c96e5930f7980d5ea14df94576",
"images/image_header.png": "dfbc3ddd0bebc9a13e5aae3366c868cc",
"images/cta_block_image.png": "58970e852e569b1b3f39ac062391e46f",
"images/cross_teambuilding.jpg": "e4b36160f0814f377c40b877b65b0e0d",
"images/icon_primary_web.svg": "bc8ab1317396adb42136b82a95a4d31a",
"images/Ph%C3%B9ng%20Quang%20Huy.JPG": "092029ce4ad30571b8b5d9730a74d1a4",
"images/close-svgrepo-com.svg": "9be664b63e1dbd6ca7767d4ec4b76da4",
"images/instagram_icon.png": "5fdcc7e2539ae399d856f2c318d222d0",
"images/arrow_up_right.svg": "24d44fddad874833382c40c4f92295f0",
"images/NguyenQuyenAnh.png": "c6001205ba06e263d146b014ce5954f0",
"images/vfast.png": "b06779531c04ddd02ca4eb155f20d047",
"images/collab_image.svg": "a73938e032eb3c0fb27b0a34e77fca2e",
"images/ited.jpg": "91342ea4adea60580685750eedcc9db0",
"images/philosophy.png": "5d6c9cee4a2dff1779f4a68e1c724729",
"images/pay_per_click_advertising.png": "1e8cc9407add62a4dc78ad1ec90966bd",
"images/image_contact_us_card.png": "890d62ed5f5101c6714f8ab4c9701a1f",
"images/social_media_marketing.png": "5455e822e39a5305ad7280d662a5bd7f",
"images/programing_image.svg": "890a47b16140ba15a3ed72a53b0076d2",
"images/office.jpg": "d823289f31662179dbe0d6ff640efe92",
"images/drillble_icon.png": "d0d8d1c9eda0fd20c5cb629f73459469",
"images/mobile_image.svg": "ae779245eca88f9bbb4ae90337fd273b",
"images/sun.svg": "bee8df5f9a88cf3e229fb56b50741f01",
"images/undraw_business-deal_nx2n.svg": "7ed869d9d0045e27d39781e94d8c6889",
"images/demo_primary_image.png": "8bcf426baf8273ec273a36e24a77bb8b",
"images/facebook_icon.png": "ec673d09d4dd232887fbb9dbf7fd4142",
"images/viettran.png": "248d54162c0ce6d6f67a639b498cd052",
"images/LeVietHung.jpg": "d96ef79a26e0ba48d6e71334c27db515",
"images/LaiXeVanXuan.jpg": "752a075ff165fe99ff62ed24f2a41945",
"images/search_engine_optimization.png": "6b1641e079092f8e017b6e0fea272db2",
"images/amazon_icon.png": "f815875f0c8505b24d569c65dd8dcfb2",
"images/notion_icon.png": "38e92c378b2598c48f433388f84e2ea4",
"images/menu-svgrepo-com.svg": "3edd1b02df911d06adbf4385d47a9b00",
"images/web_image.svg": "494af14e71db7c24bb761d0a4c940423",
"images/logo.svg": "7e0c9a5e4fb10e2226ae7e1283e57d1c",
"images/hubspot_icon.png": "89d037e06c40f03231438a0753e17b1d",
"images/L%C3%AA%20Vi%E1%BB%87t%20H%C3%B9ng.jpeg": "d96ef79a26e0ba48d6e71334c27db515",
"images/netflix_icon.png": "3b70b1ee9670e748050544204549dc13",
"images/education_image.svg": "d7668963241e262d9603431abb59038a",
"images/twitter_icon.png": "475db7f374b5104d8dae7935d60dc234",
"images/member_team.png": "4f887bb42a8103ab86b79d722106aab6",
"images/B%C3%B9i%20B%E1%BA%A3o%20Phong.JPG": "5f8b14718d0280f98d7ef9089397cd92",
"images/tungtran.jpg": "a7901c5f20547860c2d9fb2fbdbd2796",
"images/zoom_icon.png": "75e2c42e9cc2a4d8dc5a91f718a3d91e",
"images/x_cross.png": "709a44efdeeaece354b9eb42d8b4e18c",
"images/moon.svg": "a00a4c3f4ff38745113d4dbb1b8fd553",
"images/intheoffice_image.svg": "9cffd51e735225d906a636e9aadd7e9e",
"main.dart.js": "59df02007e1ad6a2dbc7dc542a09250c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5044cf5e702dbcad35c35a1186142dee",
"assets/AssetManifest.json": "90a831c83c71296f3ab7a68c67b52888",
"assets/NOTICES": "a7791279da119b01b0cc71df652edf9d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "dc29680214d808627e59922cd1e03882",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9fd1c11f512914b6bd766dcfd0703770",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/translations/ja.json": "54b6c203875f09c0f54d01d5c80f623a",
"assets/assets/translations/en.json": "e09b6f47a34c4f815919be346a43a3d9",
"assets/assets/translations/ko.json": "c32b1d7eaef51675629ea6aed7b812ea",
"assets/assets/translations/vi.json": "1c25b0386d5204adc713794da58fa78f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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

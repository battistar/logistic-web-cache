const CACHE_NAME = 'logistic-v1';

const assets = [
  '/logistic-web-cache',
  '/logistic-web-cache/index.html',
  '/logistic-web-cache/test.html',
  '/logistic-web-cache/TEST.css',
  '/logistic-web-cache/gwdiframe_style.css',
  '/logistic-web-cache/TEST.js',
  '/logistic-web-cache/gwd_webcomponents_v1_min.js',
  '/logistic-web-cache/v3d.js',
  '/logistic-web-cache/gwdiframe_min.js',
  '/logistic-web-cache/visual_logic.js',
  '/logistic-web-cache/22_raw wood oak light PBR texture-seamless.jpg',
  '/logistic-web-cache/92_concrete clean plates wall texture-seamless.jpg',
  '/logistic-web-cache/box.jpg',
  '/logistic-web-cache/studio2_environment_1k.hdr',
  '/logistic-web-cache/Floor.jpg',
  '/logistic-web-cache/TEST.bin.xz',
  '/logistic-web-cache/TEST.gltf.xz',
  '/logistic-web-cache/media',
  '/logistic-web-cache/media/manifest.json',
  '/logistic-web-cache/media/apple-touch-icon.png',
  '/logistic-web-cache/media/favicon-16x16.png',
  '/logistic-web-cache/media/favicon-32x32.png',
  '/logistic-web-cache/media/favicon-48x48.png',
  '/logistic-web-cache/media/fullscreen_close.svg',
  '/logistic-web-cache/media/fullscreen_open.svg',
  '/logistic-web-cache/media/safari-pinned-tab.svg',
];

self.addEventListener('install', (e) => {
  console.log('install');

  const preCache = async () => {
    const cache = await caches.open(CACHE_NAME);

    await cache.addAll(assets);
  };

  e.waitUntil(preCache());
});

self.addEventListener('fetch', (e) => {
  console.log('fetch');

  const fetchResponse = async () => {
    const cachedResponse = await caches.match(e.request);

    return cachedResponse || fetch(e.request);
  };

  e.respondWith(fetchResponse());
});

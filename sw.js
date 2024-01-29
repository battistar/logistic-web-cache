const CACHE_NAME = 'logistic-v1';

const assets = [
  '/',
  '/index.html',
  '/test.html',
  '/TEST.css',
  '/gwdiframe_style.css',
  '/TEST.js',
  '/gwd_webcomponents_v1_min.js',
  '/v3d.js',
  '/gwdiframe_min.js',
  '/visual_logic.js',
  '/22_raw wood oak light PBR texture-seamless.jpg',
  '/92_concrete clean plates wall texture-seamless.jpg',
  '/box.jpg',
  '/studio2_environment_1k.hdr',
  '/Floor.jpg',
  '/TEST.bin.xz',
  '/TEST.gltf.xz',
  '/media',
  '/media/manifest.json',
  '/media/apple-touch-icon.png',
  '/media/favicon-16x16.png',
  '/media/favicon-32x32.png',
  '/media/favicon-48x48.png',
  '/media/fullscreen_close.svg',
  '/media/fullscreen_open.svg',
  '/media/safari-pinned-tab.svg',
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

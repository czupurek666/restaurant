self.addEventListener('instal', function(event){
  console.log('service worker installed');
  event.waitUntil(
    caches.open('restaurant-v1').then(function(cache){
      console.log('files cached');
      return cache.addAll([

        /* CSS */
        '/css/styles.css',
        '/css/responsive.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css',

        /* JS */
        '/js/dbhelper.js',
        '/js/main.js',
        'sw.js',

        /* Data */
        '/data/restaurants.json',

        /* HTML */
        '/index.html',
        '/restaurant.html',

        /* Img */
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',

        '/img/1mid.jpg',
        '/img/2mid.jpg',
        '/img/3mid.jpg',
        '/img/4mid.jpg',
        '/img/5mid.jpg',
        '/img/6mid.jpg',
        '/img/7mid.jpg',
        '/img/8mid.jpg',
        '/img/9mid.jpg',
        '/img/10mid.jpg',
      ]);
    })
  )
})

self.addEventListener('fetch', function(event) {
  console.log('service worker fetching');
  event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('got a response')
          return response;
        }
        console.log('fetching');
        return fetch(event.request);
    })
    .catch((err) => console.log(err))
)
});

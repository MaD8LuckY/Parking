const CACHE_NAME = 'version-1'
const urlsToCache = ["index.html"]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Open cahce")
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('activate', event => {
  console.log('active')
})
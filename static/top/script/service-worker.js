var APP_PREFIX = 'DEBRIEFING_'     
var VERSION = '1_0_0'              
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [                            
  '/Debriefing/',                     
  '/Debriefing/index.html'            
]

self.addEventListener('fetch', function (e) {
  
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        
        return request
      } else {       
        
        return fetch(e.request)
      }
      
      
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      
      
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      
      cacheWhitelist.push(CACHE_NAME)
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
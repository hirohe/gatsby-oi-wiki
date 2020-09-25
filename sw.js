/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "80db5636f7ad438bb8b492ba65ef3692"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "3586146d996d5fd7703944df2f20db1f"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f9fb59f042fc206f7baed9d37765f938"
  },
  {
    "url": "page-data/blog/one/changelog/page-data.json",
    "revision": "6f9d15d19c3a3fe30c9ab73f12fc49b5"
  },
  {
    "url": "page-data/blog/one/page-data.json",
    "revision": "8ad7717a63baaa5f40c78b79aa405efa"
  },
  {
    "url": "page-data/blog/two/changelog/page-data.json",
    "revision": "4e82e3dab9c6792018d1e90034ae3f06"
  },
  {
    "url": "page-data/blog/two/page-data.json",
    "revision": "662ff9a140e7ad05008b8833aa6ec600"
  },
  {
    "url": "page-data/changelog/page-data.json",
    "revision": "03fcd0a192922f5089b83ba9e6308c65"
  },
  {
    "url": "page-data/empty/changelog/page-data.json",
    "revision": "1f1dece6c795154b4af2f3261ae866e2"
  },
  {
    "url": "page-data/empty/page-data.json",
    "revision": "76a44fc638447c5ab336cfbffc589df6"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f02a6e632da00f13f6a7f2e3853ff40a"
  },
  {
    "url": "page-data/math/changelog/page-data.json",
    "revision": "18a5dd4c27262aaa4328b660dab970b4"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "5dbbec5bae332584f1730688c338f35d"
  },
  {
    "url": "page-data/math/poly/div-mod/changelog/page-data.json",
    "revision": "6fed16a96055c1d1ebaef0de280f91de"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "f3ffcfe08fb6738489c2fabec5e4cd87"
  },
  {
    "url": "page-data/math/poly/fft/changelog/page-data.json",
    "revision": "e420a4a3fa071a165e9e3a834a60354a"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "e138530696417fa77f9f2240c41ada60"
  },
  {
    "url": "page-data/math/poly/fwt/changelog/page-data.json",
    "revision": "2ac8ca49936c590af1dbfe0e2e460cfa"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "ffa39e69f43cc0a1212e2e5a031b7b6d"
  },
  {
    "url": "page-data/math/poly/intro/changelog/page-data.json",
    "revision": "1b27bef1face9e243f4448b43834045b"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "f45d578d997daefccee7cad75a3a1490"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/changelog/page-data.json",
    "revision": "94039b1c9ed48b1262dfbd902b7fb5e4"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "f1855098a4b3f9a73d37415fa401f09f"
  },
  {
    "url": "page-data/math/poly/inv/changelog/page-data.json",
    "revision": "3e5f0347f3c6a26ef5f25e930ba85f0d"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "b5c8937cd60e6b914a31201967123f51"
  },
  {
    "url": "page-data/math/poly/lagrange/changelog/page-data.json",
    "revision": "2eda5d8fe43c59e849dde536f3a37151"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "7cd54cc0ba19b49dee9167db0f1053f9"
  },
  {
    "url": "page-data/math/poly/ln-exp/changelog/page-data.json",
    "revision": "886fc4acb3728e1349ca9f34b236de1d"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "d86912d114e27b3105f7b9df840dfb6b"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/changelog/page-data.json",
    "revision": "fd3dc3a593885d1a44c8f87577b7c644"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "770a1d2c4c40df4429b8b22be9ad479d"
  },
  {
    "url": "page-data/math/poly/newton/changelog/page-data.json",
    "revision": "e9afa6e8ac0deb100c139bb36c538e94"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "b47f83d8614986a2985819c54284097c"
  },
  {
    "url": "page-data/math/poly/ntt/changelog/page-data.json",
    "revision": "c2dd0b426ac09bb4e1556c5fa8115332"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "018f8582f3e8cb34385c73bcdc4174cd"
  },
  {
    "url": "page-data/math/poly/sqrt/changelog/page-data.json",
    "revision": "d50a74887caa763b426aebdab1b304c8"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "ba169825446b536c506c6d98a813f2ba"
  },
  {
    "url": "page-data/math/poly/tri-func/changelog/page-data.json",
    "revision": "922a6d0fa255505cc88274ab6ce2109f"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "ea49e80a31c8ef6481a54fa62a5ebe6a"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "e4edc5d345c7d0b85fc3fdba6e9caa45"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "d9fbc4928896c110077ab2d3d92f85ff"
  },
  {
    "url": "page-data/sq/d/2462162885.json",
    "revision": "051d2575bb447970664b9215ad0b798e"
  },
  {
    "url": "page-data/sq/d/2862490856.json",
    "revision": "c1a2b2dab73b530b56847a5b43b0a02e"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "81220cc374ea7f507ad69ee1c7c4894f"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "d49bdccca68947b5d543dd9132a24f6f"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "fc7404b5031ec9d63e8828d8e42de0c3"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "d12966e1887a7c036cbebcddde7aae38"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "f9d89c47163e45a410ae963ec32c6e0f"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "e3165fc0fb180514505daaacbfed7182"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "9d6f40f3477a632c4793016035d7593d"
  },
  {
    "url": "page-data/tags/wip/page-data.json",
    "revision": "883ba854bdc293d8893fb8c9e67e92a4"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "3847d3824c9ec5569df4020b9b35439f"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "2947c9b317ff3e6845c8217aa6b34398"
  },
  {
    "url": "page-data/test/changelog/page-data.json",
    "revision": "f7dc414741ca6392b70a4ab138933b31"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "7cedd912de91130ed0985f688633a599"
  },
  {
    "url": "8422f42bd55f7b64a5a22d21a1be841add877e5c-4250aa8c4dc55fd109d2.js"
  },
  {
    "url": "app-825a93bb6a22ad3e99c7.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-64a836d186a6e11168d8.js"
  },
  {
    "url": "component---src-pages-404-tsx-724b7cfd3cd6007d4238.js"
  },
  {
    "url": "component---src-pages-pages-js-97c1e4f549ff51acfe98.js"
  },
  {
    "url": "component---src-pages-settings-tsx-09e56ac2df55aee5a469.js"
  },
  {
    "url": "component---src-pages-tags-js-31e8c1a6e4b50d3451f5.js"
  },
  {
    "url": "component---src-templates-changelog-js-b066a867e2bcedf87561.js"
  },
  {
    "url": "component---src-templates-doc-js-a9186d2dcba28cb164bb.js"
  },
  {
    "url": "component---src-templates-tags-js-2c772f67430972c1f667.js"
  },
  {
    "url": "framework-9e014ff2f7612ce5f1fc.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "polyfill-b889c731a3f49c57da25.js"
  },
  {
    "url": "script.js"
  },
  {
    "url": "styles-5379f07abcd59a0e64bf.js"
  },
  {
    "url": "webpack-runtime-d41a9a35667eb4f92207.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7d1c7e5936ee347849e4dc9c5572dbb7"
  },
  {
    "url": "styles.ea42c128f89644cdfc4c.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "67049a60e3b67c28db901d7ce440468a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-825a93bb6a22ad3e99c7.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

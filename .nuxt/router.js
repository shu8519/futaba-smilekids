import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0024bbb6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _97e7c92c = () => interopDefault(import('../pages/affiliations.vue' /* webpackChunkName: "pages/affiliations" */))
const _6ba41c66 = () => interopDefault(import('../pages/company.vue' /* webpackChunkName: "pages/company" */))
const _204d1c1e = () => interopDefault(import('../pages/corporation.vue' /* webpackChunkName: "pages/corporation" */))
const _e8009ad6 = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _f82c682e = () => interopDefault(import('../pages/illness.vue' /* webpackChunkName: "pages/illness" */))
const _662be1ba = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _5d6be91c = () => interopDefault(import('../pages/price.vue' /* webpackChunkName: "pages/price" */))
const _1fdc967b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0024bbb6,
    name: "about"
  }, {
    path: "/affiliations",
    component: _97e7c92c,
    name: "affiliations"
  }, {
    path: "/company",
    component: _6ba41c66,
    name: "company"
  }, {
    path: "/corporation",
    component: _204d1c1e,
    name: "corporation"
  }, {
    path: "/flow",
    component: _e8009ad6,
    name: "flow"
  }, {
    path: "/illness",
    component: _f82c682e,
    name: "illness"
  }, {
    path: "/news",
    component: _662be1ba,
    name: "news"
  }, {
    path: "/price",
    component: _5d6be91c,
    name: "price"
  }, {
    path: "/",
    component: _1fdc967b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

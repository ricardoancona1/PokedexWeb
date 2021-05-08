import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Inicio'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tipoPlanta',
    name: 'tipoPlanta',
    component: () => import('../views/TipoPlanta.vue')
  },
  {
    meta: {
      title: 'TipoFuego'
    },
    path: '/tipoFuego',
    name: 'tipoFuego',
    component: () => import('../views/TipoFuego.vue')
  },
  {
    meta: {
      title: 'TipoAgua'
    },
    path: '/tipoAgua',
    name: 'tipoAgua',
    component: () => import('../views/TipoAgua.vue')
  },
  {
    meta: {
      title: 'Historial'
    },
    path: '/Historial',
    name: 'Historial',
    component: () => import('../views/Historial.vue')
  },
  {
    meta: {
      title: 'Detalles pokemon'
    },
    path: '/pokemon/:id',
    name: '_id',
    component: () => import('../views/_Id.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'Home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    menu () {
      return [
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Todos'
          }
        ],
        [
          {
            to: '/tipoPlanta',
            label: 'Tipo planta',
            icon: 'tree',
          },
          {
            to: '/tipoFuego',
            label: 'Tipo fuego',
            icon: 'fire'
          },
          {
            to: '/tipoAgua',
            label: 'Tipo Agua',
            icon: 'water'
          },
          {
            to: '/Historial',
            label: 'Historial',
            icon: 'history'
          }
        ]
      ]
    }
  },
  created () {

  }
}
</script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* NavBar */
    isNavBarVisible: true,

    /* FooterBar */
    isFooterBarVisible: true,

    /* Aside */
    isAsideVisible: true,
    isAsideMobileExpanded: false,
    hasSearched: false,
    pokemonSearched: "",
    historial: []

  },
  mutations: {
    /* A fit-them-all commit */
    basic(state, payload) {
      state[payload.key] = payload.value
    },
    setHasUserSearched: (state, hasSearched) => {
      state.hasSearched = hasSearched;
    },
    setPokemonSearched: (state, pokemonSearched) => {
      state.pokemonSearched = pokemonSearched;
    },
    addToHistorial: (state, pokemon) => {
      let history_length=state.historial.length 
      if (history_length== 5) {
        for (let i = 0; i < history_length; i++) {
          if(i!=history_length-1){
            state.historial[i]=state.historial[i+1]
          }else{
            state.historial[i]=pokemon
          }

          } 
      } else {
        state.historial.push(pokemon)
      }

    },
    /* User */
    user(state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },

    /* Aside Mobile */
    asideMobileStateToggle(state, payload = null) {
      const htmlClassName = 'has-aside-mobile-expanded'

      let isShow

      if (payload !== null) {
        isShow = payload
      } else {
        isShow = !state.isAsideMobileExpanded
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }

      state.isAsideMobileExpanded = isShow
    }
  },
  actions: {

  },

})

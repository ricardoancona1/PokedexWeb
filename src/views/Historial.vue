<template>
  <div>
      <h1>Historial</h1>
<br>
    <div class="columns is-centered is-multiline" >

      <div
        class="card column is-one-quarter"
        v-for="(poke, index) in pokemones"
        :key="index"
      >
        <div>
          <router-link :to="'/pokemon/' + poke.number">
            <card  v-if="poke" :pokemon="poke"> </card>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import card from "./PokemonCard";
export default {
  name: "App",
  props: ["tipo"],
  components: {
    card,
  },
  data() {
    return {
      pokemon: [],
      pokemonlist: [],
    };
  },
  computed: {
    hasSearched() {
      return this.$store.state.hasSearched;
    },
    pokemones() {
return this.$store.state.historial
    },
  },
  mounted() {
    
  },
  methods: {
  
    getPokemonByName() {
      let keyword = this.$store.state.pokemonSearched;
      let search = keyword.trim().toLowerCase();
      let filtro = this.pokemon.filter(
        (item) => item.name.toLowerCase().indexOf(search) > -1
      );
      return filtro;
    },
  },
};
</script>
<style lang='scss' scoped>
.element {
  position: relative;
  top: 40px;
  left: 40px;
}
</style>
<template>
  <div>
    <div class="columns is-centered is-multiline" >
      <div
        class="card column is-one-quarter"
        v-for="(poke, index) in pokemones"
        :key="index"
        v-show=" (poke.types[0].type.name == tipo || tipo == undefined)
        "
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
import axios from "axios";
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
      if (!this.$store.state.hasSearched) {
        return this.pokemon;
      } else {
        return this.getPokemonByName();
      }
    },
  },
  mounted() {
    this.getPokemonData();
  },
  methods: {
    getPokemonData() {
      for (let i = 1; i < 17; i++) {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}`, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.pokemon.push({
              name: response.data.name,
              types: response.data.types,
              abilities: response.data.abilities,
              imgUrl: response.data.sprites.front_default,
              number: response.data.id,
            });
          });
      }
    },
    getPokemonByName() {
      let keyword = this.$store.state.pokemonSearched;
      let search = keyword.trim().toLowerCase();
      //console.log(this.pokemon)
      let filtro = this.pokemon.filter(
        (item) => item.name.toLowerCase().indexOf(search) > -1
      );
      console.log(filtro)
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
<template>
  <div class="pokemon columns is-multiline">
    <div class="section is-main-section column is-one-third">
      <h2>{{ pokemon.name }}</h2>

      <figure class="image is-4by3">
        <img
          :src="pokemon.imgUrl"
          alt="Imagen no disponible"
          style="width: 235px; height: 235px"
        />
      </figure>
    </div>
    <div class="section is-main-section column">
      <tabs
        :pokedex="pokemon"
      ></tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import tabs from "../components/tabs";
import historial from "./Historial"
export default {
  components: {
    tabs,
  },
  data() {
    return {
      id: this.$route.params.id,
      pokemon: {},
      pokedex: {},
    };
  },
  mounted() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        this.pokemon = {
          name: response.data.name,
          types: response.data.types,
          abilities: response.data.abilities,
          imgUrl: response.data.sprites.front_default,
          number: response.data.id,
          stats: response.data.stats,
          weight: response.data.weight,
          height: response.data.height,
        };
         this.$store.commit("addToHistorial", this.pokemon);
      });
  },
};
</script>
<style scoped>
.pokemon {
  margin-left: 10px;
}
</style>
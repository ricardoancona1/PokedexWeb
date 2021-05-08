<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li v-bind:class="{ 'is-active': isActive == 'pokedex' }">
          <a v-on:click="isActive = 'pokedex'">Pokedex</a>
        </li>
        <li v-bind:class="{ 'is-active': isActive == 'stats' }">
          <a v-on:click="isActive = 'stats'">Stats</a>
        </li>
        <li v-bind:class="{ 'is-active': isActive == 'evolution' }">
          <a v-on:click="isActive = 'evolution'">Evolution</a>
        </li>
      </ul>
    </div>
    <div class="tab-contents">
      <div
        class="content"
        v-bind:class="{ 'is-active': isActive == 'pokedex' }"
      >
        <table class="table">
            <tr>
                Types:
            <div v-for="(types, index) in pokedex.types" :key="index">
              <li>{{ types.type.name }}</li>
            </div>
            </tr>
          <tr>
            Height:
            {{
              pokedex.height / 10
            }}
            m
          </tr>
          <tr>
            Weight:
            {{
              pokedex.weight / 10
            }}
            Kg
          </tr>
          <tr>
            Abilities :
            <div v-for="(abilities, index) in pokedex.abilities" :key="index">
              <li>{{ abilities.ability.name }}</li>
            </div>
          </tr>
        </table>
      </div>
      <div class="content" v-bind:class="{ 'is-active': isActive == 'stats' }">
        <div v-for="(stats, index) in pokedex.stats" :key="index">
          <table class="table">
            <tr>
              {{
                stats.stat.name
              }}
              :
              {{
                stats.base_stat
              }}
            </tr>
          </table>
        </div>
      </div>
      <div class="content" v-bind:class="{ 'is-active': isActive == 'evolution' }">
        <div v-for="(forma,index) in formsUrls" :key="index">
        <img
          :src="forma"
          alt="Imagen no disponible"
          style="width: 100; height: 100"
          class="pull-right"
        />
        {{names[index]}}
        <br>
        <b-icon icon="arrow-down" v-show="index!=2"></b-icon>
        </div>
      </div>
      <div
        class="content"
        v-bind:class="{ 'is-active': isActive == 'documents' }"
      >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["pokedex"],
  data() {
    return {
      isActive: "pokedex",
      evolution_chainUrl: "",
      formsUrls: [],
      imgDefaultUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    names:[]
    };
  },
  beforeUpdate() {
    this.getEvolutionChainUrl();
  },
  methods: {
    getEvolutionChainUrl() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${this.pokedex.name}`, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          this.evolution_chainUrl = response.data.evolution_chain.url;
          this.getFormsUrls();
        });
    },
    getFormsUrls() {
      axios
        .get(this.evolution_chainUrl, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          this.formsUrls[0] =
            response.data.chain.species.url
              .slice(0, -1)
              .replace(
                "https://pokeapi.co/api/v2/pokemon-species/",
                this.imgDefaultUrl
              ) + ".png";
          (this.formsUrls[1] =
            response.data.chain.evolves_to[0].species.url
              .slice(0, -1)
              .replace(
                "https://pokeapi.co/api/v2/pokemon-species/",
                this.imgDefaultUrl
              ) + ".png"),
            (this.formsUrls[2] =
              response.data.chain.evolves_to[0].evolves_to[0].species.url
                .slice(0, -1)
                .replace(
                  "https://pokeapi.co/api/v2/pokemon-species/",
                  this.imgDefaultUrl
                ) + ".png"),
                this.names[0]=response.data.chain.species.name
                this.names[1]= response.data.chain.evolves_to[0].species.name
                this.names[2]=  response.data.chain.evolves_to[0].evolves_to[0].species.name
        });
    },
  },
};
</script>

<style >
.tab-contents .content {
  display: none;
}
.tab-contents .content.is-active {
  display: block;
}
.table {
}
</style>
<template>
  <div class="card">
    <header
      class="card-header"
      style="background-color: #CA021D; font-color: white"
    >
      <p class="card-header-title">
       
        {{pokemon.name}}
      </p>
      <p class="title is-3 is-pulled-right"> #{{  pokemon.number}}</p>
    </header>
    <div class="card-image">
      <p class="title is-6"></p>
      <figure class="image is-4by3">
        <img
          :src="pokemon.imgUrl"
          alt="Imagen no disponible"
          style="width: 235px; height: 235px"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media"></div>
      <div class="content is-clearfix"></div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="media-content" v-for="(type, index) in pokemon.types" :key="index">
            <img
              v-if="type.type.name=='water'"
              v-bind:src="typesImgUrl.water"
              alt="Placeholder image"
              style="width: 50; height: 25px; card-border-color: red"
            />
                        <img
              v-if="type.type.name=='grass'"
              v-bind:src="typesImgUrl.grass"
              alt="Placeholder image"
              style="width: 50; height: 25px; card-border-color: red"
            />
                        <img
              v-if="type.type.name=='fire'"
              v-bind:src="typesImgUrl.fire"
              alt="Placeholder image"
              style="width: 50; height: 25px; card-border-color: red"
            />
                        <img
              v-if="type.type.name=='flying'"
              v-bind:src="typesImgUrl.flying"
              alt="Placeholder image"
              style="width: 50; height: 25px; card-border-color: red"
            />
                        <img
              v-if="type.type.name=='normal'"
              v-bind:src="typesImgUrl.normal"
              alt="Placeholder image"
              style="width: 50; height: 25px; card-border-color: red"
            />
                        <img
              v-if="type.type.name=='bug'"
              v-bind:src="typesImgUrl.bug"
              alt="Placeholder image"
              style="width: 50; height: 25px; card-border-color: red"
            />
                        <img
              v-if="type.type.name=='poison'"
              v-bind:src="typesImgUrl.poison"
              alt="Placeholder image"
              style="width: 50; height: 25px; card-border-color: red"
            />
  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props:["wheel","pokemon"],
  data() {
    return {

        typesImgUrl:{
          water:"https://s3.amazonaws.com/kandipatternspatterns/misc/15324_Pokemon_Water_Type.png",
          fire:"https://s3.amazonaws.com/kandipatternspatterns/misc/15327_Pokemon_Fire_Type.png",
          grass:"https://i.pinimg.com/originals/59/53/44/5953444e7825b54fd0f2cbfafc326ad3.png",
          poison:"https://i.pinimg.com/originals/65/43/53/6543536fb768db1eac9bccbe66b06390.png",
          flying:"https://s3.amazonaws.com/kandipatternspatterns/misc/15329_Pokemon_Flying_Type.png",
          bug:"https://s3.amazonaws.com/kandipatternspatterns/misc/15335_pokemon_bug_type.png",
          normal:"https://i.pinimg.com/originals/64/e6/84/64e6842383172e8645126c489e1de351.png"
        }
};
  },
  mounted() {
   
  },
};
</script>

<style lang="scss" scoped>
.details {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  &:hover {
    border: 1px solid #51bafc;
  }
}
.button,
.select {
  z-index: 2;
}
.select {
  position: absolute;
  right: 15px;
  bottom: 35px;
}
.card-content {
  padding: 0;
}
.buttons {
  margin: 0;
}
</style>
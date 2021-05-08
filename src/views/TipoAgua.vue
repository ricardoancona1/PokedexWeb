<template>
  <home :tipo="tipo"></home>
</template>
<script>
import home from "./Home"
export default {
  components:{
    home
  },
  data() {
    return{
      tipo:"water"
    }
  },
}
</script>
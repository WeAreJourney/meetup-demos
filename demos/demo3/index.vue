<template>
  <div>
      <h1>Oh, hi {{greeting}}</h1>
      <dog-component :breeds="breeds" v-on:change="breedChange"></dog-component>
  </div>
</template>

<script>
import dogComponent from "./dog.vue";
export default {
  components: {
    dogComponent,
  },
  data: function() {
      return {
        greeting: "world",
        breeds: []
      }
  },
  methods: {
    breedChange: function(breed) {
      this.greeting = breed;
    }
  }
}
</script>

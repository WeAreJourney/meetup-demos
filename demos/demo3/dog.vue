<template>
  <div>
      <div v-if="doggo">
        <img class="dog" :src="doggo" alt="rando doggo">
      </div>
      <div v-for="(breed, key) in breeds" :key="key">
        <button @click="getBreed(breed)">{{breed}}</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    breeds: {
      type: Array,
      default: []
    }
  },
  data: function() {
      return {
        doggo: undefined
      }
  },
  methods: {
    getBreed: function(breed) {
      const vm = this;
      axios.post("/dogs", {breed: breed})
        .then(function(response) {
          vm.doggo = response.data.image;
        })
    }
  }
}
</script>

<style>
.dog {
  position: fixed;
  top:0;
  right:0;
  width: 500px;
}
</style>

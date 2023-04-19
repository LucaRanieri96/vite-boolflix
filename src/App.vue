<script>
import { store } from "./store.js";

export default {
  components: {

  },
  data() {
    return {
      store,
      searchValue: "",
    };
  },
  methods: {
    search() {
      console.log(this.searchValue)
    }
  },
  created() {
    this.store.fetchCards(this.store.apiUrl);
  }
};
</script>

<template>
    <div>
      <input type="text" v-model="searchValue" placeholder="Cerca un film">
      <button @click="search()">Send</button>
    </div>
</template>

<style lang="scss">
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "./styles/style.scss";
</style>

<script>
import { store } from "./store.js";
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <div>
    <input type="text" v-model="store.searchValue" placeholder="Cerca un film" />
    <button @click="store.fetchMovies(), store.fetchTvShow()">Send</button>
    <SiteMain></SiteMain>
  </div>
</template>


<style lang="scss">
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "./styles/style.scss";
</style>

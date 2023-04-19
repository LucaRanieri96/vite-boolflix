<script>
import { store } from "./store.js";

export default {
  components: {},
  data() {
    return {
      store,
    };
  },
  methods: {},
  created() {
    this.store.fetchMovies();
    this.store.fetchTvShow();
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="store.searchValue" placeholder="Cerca un film" />
    <button @click="store.fetchMovies(), store.fetchTvShow()">Send</button>
    <ul>
      <li v-for="(movie, index) in store.fetchedMovies">
        <p>---movie {{ index }}</p>
        <h3>Title: {{ movie.title }}</h3>
        <p>Original title: {{ movie.original_title }}</p>
        <p>Language: {{ movie.original_language }}</p>
        <p>Score: {{ movie.vote_average }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(tvshow, index) in store.fetchedTvShows">
        <p>---tvshow {{ index }}</p>
        <h3>Title: {{ tvshow.name }}</h3>
        <p>Original title: {{ tvshow.original_name }}</p>
        <p>Language: {{ tvshow.original_language }}</p>
        <p>Score: {{ tvshow.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "./styles/style.scss";
</style>

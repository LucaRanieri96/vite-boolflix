<script>
import { store } from "../store.js";

export default {
  name: "SiteMain",
  data() {
    return {
      store,
    };
  },
  methods: {
    changeScore(score) {
      return Math.round(Number(score) / 2);
    }
  }
  
};
</script>

<template>
  <ul>
      <li v-for="(movie, index) in store.fetchedMovies">
        <p>---movie {{ index }}</p>
        <img :src="`${store.coverUrl}${movie.poster_path}`">
        <h3>Title: {{ movie.title }}</h3>
        <p>Original title: {{ movie.original_title }}</p>
        <div v-html="store.langToFlag(movie.original_language)"></div>
        <p>Score: {{ changeScore(movie.vote_average) }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(tvshow, index) in store.fetchedTvShows">
        <p>---tvshow {{ index }}</p>
        <img :src="`${store.coverUrl}${tvshow.poster_path}`">
        <h3>Title: {{ tvshow.name }}</h3>
        <p>Original title: {{ tvshow.original_title }}</p>
        <div v-html="store.langToFlag(movie.original_language)"></div>
        <p>Score: {{ changeScore(tvShow.vote_average) }}</p>
      </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>

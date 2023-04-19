<script>
import { store } from "../store.js";

export default {
  name: "SiteMain",
  data() {
    return {
      store,
    };
  },
  
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
        <p>Score: {{ movie.vote_average }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(tvshow, index) in store.fetchedTvShows">
        <p>---tvshow {{ index }}</p>
        <img :src="`${store.coverUrl}${tvshow.poster_path}`">
        <h3>Title: {{ tvshow.name }}</h3>
        <p>Original title: {{ tvshow.original_title }}</p>
        <div v-html="store.langToFlag(movie.original_language)"></div>
        <p>Score: {{ tvshow.vote_average }}</p>
      </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>

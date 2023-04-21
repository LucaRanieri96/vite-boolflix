<script>
import { state } from "../state.js";
export default {
  name: "SearchList",
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <main>
    <h1>TEST</h1>
    <div class="container-fluid p-5">
      <div v-for="movie in state.movies">
        <div v-if="movie">
            <h2>{{ movie.title }}</h2>
            <h2>{{ movie.vote_average }}</h2>
        </div>
        <div v-else>
          <h2>{{ series.title }}</h2>
          <h2>{{ series.vote_average }}</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main{
    color: white;
}
</style>

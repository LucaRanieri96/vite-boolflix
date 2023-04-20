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
    },
    starScore(score) {
      let stars = Math.round(score);
      return stars;
    },
  },
};
</script>

<template>
  <main>
    <!-- FILM -->
    <div class="container-fluid">
      <ul class="row flex-row">
        <li class="col-2" v-for="movie in store.fetchedMovies">
          <div class="card text-bg-dark">
            <img
              class="card-img"
              :src="`${store.coverUrl}${movie.poster_path}`"
            />
            <div class="card-img-overlay">
              <h4>{{ movie.title }}</h4>
              <p class="card-text mb-4">
                Original title: {{ movie.original_title }}
              </p>
              <div>
                <div v-html="store.langToFlag(movie.original_language)"></div>
              </div>
              <div>
                <p>Score: {{ changeScore(movie.vote_average) }}</p>
                <span
                  v-for="star in starScore(changeScore(movie.vote_average))"
                  :key="star"
                  >⭐️</span
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- TVSHOW -->
    <div class="container-fluid">
        <ul class="row flex-row">
          <li class="col-2" v-for="tvshow in store.fetchedTvShows">
            <div class="card text-bg-dark">
              <img
                class="card-img"
                :src="`${store.coverUrl}${tvshow.poster_path}`"
              />
              <div class="card-img-overlay">
                <h4>{{ tvshow.name }}</h4>
                <p class="card-text mb-4">
                  Original title: {{ tvshow.original_title }}
                </p>
                <div>
                  <div v-html="store.langToFlag(tvshow.original_language)"></div>
                </div>
                <div>
                  <p>Score: {{ changeScore(tvshow.vote_average) }}</p>
                  <span
                    v-for="star in starScore(changeScore(tvshow.vote_average))"
                    :key="star"
                    >⭐️</span
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </main>
</template>

<style lang="scss" scoped>

ul,h4,p {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>

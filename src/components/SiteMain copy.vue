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
    <div class="container-fluid p-5">
      <!-- Film -->
      <h2>Film</h2>
      <ul class="row flex-row">
        <li class="col-2 my-2 d-flex" v-for="movie in store.movies">
          <div class="card text-bg-dark">
            <img
              class="card-img"
              :src="movie.poster_path ? `${store.coverUrl}${movie.poster_path}`: 'src/assets/imgs/placeholder_image.jpg'
              "
            />
            <div class="card-img-overlay">
              <h3>{{ movie.title }}</h3>
              <p>{{ movie.release_date }}</p>
              <p class="card-text mb-4">
              <strong>Original title:</strong> "{{ movie.original_title }}"
              </p>
              <p class="card-text"><strong>Description:</strong> {{ movie.overview }}</p>
              <div class="my-2">
                <div v-html="store.langToFlag(movie.original_language)"></div>
              </div>
              <div class="pb-3">
                <p><strong>Score(1to10):</strong> {{ movie.vote_average }}</p>
                <span
                  v-for="star in starScore(changeScore(movie.vote_average))"
                  :key="star">⭐️</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- TVSHOW -->
      <h2>Tv Show</h2>
      <ul class="row flex-row">
        <li class="col-2 my-2" v-for="series in store.series">
          <div class="card text-bg-dark">
            <img
              class="card-img"
              :src="series.poster_path ? `${store.coverUrl}${series.poster_path}`: 'src/assets/imgs/placeholder_image.jpg'
              "
            />
            <div class="card-img-overlay">
              <h3>{{ series.name }}</h3>
              <p>{{ series.first_air_date }}</p>
              <p class="card-text mb-4">
                <strong>Original title:</strong> {{ series.original_name }}
              </p>
              <p class="card-text"><strong>Description:</strong> {{ series.overview }}</p>
              <div class="my-2">
                <div v-html="store.langToFlag(series.original_language)"></div>
              </div>
              <div class="pb-1">
                <p><strong>Score(1to10):</strong> {{ series.vote_average }}</p>
                <span
                  v-for="star in starScore(changeScore(series.vote_average))"
                  :key="star">⭐️</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
ul,
h4,
p {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.card-img-overlay {
  opacity: 0;
  display: none;
  transition: opacity 0.5s;
}

.card {
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
  }
}

.card:hover {
  overflow-y: auto;
  .card-img-overlay {
    opacity: 1;
    display: block;
  }
  .card-img {
    opacity: 0.2;
  }
}
.card:not(:hover) .card-img-overlay {
  transition: 0s;
}
</style>

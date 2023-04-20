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
      <!-- TVSHOW -->
      <h2>Tv Show</h2>
      <ul class="row flex-row">
        <li class="col-2 my-2" v-for="tvshow in store.fetchedTvShows">
          <div class="card text-bg-dark">
            <img
              class="card-img"
              :src="tvshow.poster_path ? `${store.coverUrl}${tvshow.poster_path}`: 'src/assets/imgs/placeholder_image.jpg'
              "
            />
            <div class="card-img-overlay">
              <h4>{{ tvshow.name }}</h4>
              <p class="card-text mb-4">
                Original title: {{ tvshow.original_name }}
              </p>
              <p class="card-text">{{ tvshow.overview }}</p>
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
      <h2>Film</h2>
      <ul class="row flex-row">
        <li class="col-2 my-2 d-flex" v-for="movie in store.fetchedMovies">
          <div class="card text-bg-dark">
            <img
              class="card-img"
              :src="movie.poster_path ? `${store.coverUrl}${movie.poster_path}`: 'src/assets/imgs/placeholder_image.jpg'
              "
            />
            <div class="card-img-overlay">
              <h4>{{ movie.title }}</h4>
              <p class="card-text mb-4">
                Original title: {{ movie.original_title }}
              </p>
              <p class="card-text">{{ movie.overview }}</p>
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

<script>
import { store } from "../store.js";

export default {
  name: "LiResponse",
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
  computed: {
    seriesMovies(){
      let seriesMovie = this.store.allResults.movies.concat(this.store.allResults.series);
      return seriesMovie
    }
  }
};
</script>

<template>
  <li class="col-2 my-2 d-flex" v-for="item in seriesMovies">
    <div class="card text-bg-dark">
      <img
        class="card-img"
        :src="
          item.poster_path
            ? `${store.coverUrl}${item.poster_path}`
            : 'src/assets/imgs/placeholder_image.jpg'"/>
      <div class="card-img-overlay">
        <div>
          <h3 v-if="movie.title">{{ item.title }}</h3>
          <h3 v-else>{{ item.name }}</h3>
        </div>
        <p v-if="movie.release_date">{{ item.release_date }}</p>
        <p v-else>{{ item.first_air_date }}</p>
        <p class="card-text mb-4" v-if="movie.original_title">
          <strong>Original title:</strong> "{{ item.original_title }}"
        </p>
        <p class="card-text mb-4" v-else>
          <strong>Original title:</strong> "{{ item.original_name }}"
        </p>
        <p class="card-text">
          <strong>Description:</strong> {{ item.overview }}
        </p>
        <div class="my-2">
          <div v-html="store.langToFlag(item.original_language)"></div>
        </div>
        <div class="pb-3">
          <p><strong>Score(1to10):</strong> {{ item.vote_average }}</p>
          <span
            v-for="star in starScore(changeScore(item.vote_average))"
            :key="star"
            >⭐️</span
          >
        </div>
      </div>
    </div>
  </li>
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
  img {
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

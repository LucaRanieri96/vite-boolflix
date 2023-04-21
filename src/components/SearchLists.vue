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
    <div class="container-fluid p-5">
      <!-- TVSHOW -->
      <ul class="row flex-row">
        <li class="col-2 my-2" v-for="tvshow in state.series">
          <div class="card text-bg-dark">
            <img
              class="card-img"
              :src="tvshow.poster_path ? `${state.coverUrl}${tvshow.poster_path}`: 'src/assets/imgs/placeholder_image.jpg'
              "
            />
            <div class="card-img-overlay">
              <h4>{{ tvshow.name }}</h4>
              <p class="card-text mb-4">
                Original title: {{ tvshow.original_name }}
              </p>
              <p class="card-text">{{ tvshow.overview }}</p>
              <div>
                <div v-html="state.langToFlag(tvshow.original_language)"></div>
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

<style scoped lang="scss"></style>

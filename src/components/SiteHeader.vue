<script>
import { store } from "../store.js";

export default {
  name: "SiteHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header class="d-flex justify-content-between">
    <div class="header_left d-flex align-items-center">
      <div class="logo d-flex align-items-center mx-5">
        <img src="../assets/imgs/Logonetflix.png" alt="">
      </div>
      <div class="nav_links">
        <a href="#">Home</a>
        <a href="#">Serie TV</a>
        <a href="#">Film</a>
        <a href="#">Nuovi e popolari</a>
        <a href="#">La mia lista</a>
        <a href="#">Sfoglia per lingua</a>
      </div>
    </div>
    <div class="header_right d-flex align-items-center mx-4">
      <input
        class="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="store.searchValue"
        @keyup.enter="store.fetchMovies(), store.fetchTvShow()"
      />
      <button
        class="btn btn-outline-success"
        type="submit"
        @click="store.fetchMovies(), store.fetchTvShow()"
      >
        Search
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header{
  height: 70px;
  .header_right {
    width: 20%;
  }

}
.logo{
  height: 100%;
  img{
    max-height: 55%;
  }
}

.nav_links{
  a{
    text-decoration: none;
    color: white;
    margin-right: 1rem;
  }
}
</style>

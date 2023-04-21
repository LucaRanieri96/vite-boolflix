<script>
import { store } from "../store.js";
import { state } from "../state.js";

export default {
  name: "SiteHeader",
  data() {
    return {
      store,
      state,
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
        <a href="#"><strong>Home</strong></a>
        <a href="#">Serie TV</a>
        <a href="#">Film</a>
        <a href="#">Nuovi e popolari</a>
        <a href="#">La mia lista</a>
        <a href="#">Sfoglia per lingua</a>
      </div>
    </div>
    <div class="header_right d-flex align-items-center mx-5">
      <input
      class="form-control me-2"
      type="text"
      placeholder="Search"
      aria-label="Search"
      v-model="store.searchValue"
      @keyup.enter="store.fetchMovies(), store.fetchTvShow(), state.fetchAllResult()"
      />

      <button
        class="btn btn-outline-danger"
        type="submit"
        @click="store.fetchMovies(), store.fetchTvShow(), state.fetchAllResult()"
      >
        Search
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header{
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-image: linear-gradient(to bottom, black 10%, rgba(12,12,16,0.5));
  .header_right {
    width: 20%;
    input{
    background-color: rgb(46, 46, 46);
    color: white;
  }
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

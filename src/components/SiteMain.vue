<script>
import { store } from "../store.js";
import LiResponse from "./LiResponse.vue";

export default {
  name: "SiteMain",
  components: {
    LiResponse
  },
  data() {
    return {
      store,
      
    };
  },
};
</script>

<template>
  <main>
    <div class="container-fluid p-5">
      <!-- Film -->
      <h2>Film</h2>
      <ul class="row flex-row">
        <LiResponse></LiResponse>
      </ul>
      <!-- TVSHOW -->
      <h2>Tv Show</h2>
      <ul class="row flex-row">
        <LiResponse></LiResponse>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>

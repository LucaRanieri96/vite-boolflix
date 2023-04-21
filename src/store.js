import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrlMovies: "https://api.themoviedb.org/3/search/movie?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  apiUrlTvShow: "https://api.themoviedb.org/3/search/tv?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  searchValue: "",
  fetchedMovies: [],
  fetchedTvShows: [],
  flags: {
    "it": "/src/assets/imgs/Italia.png",
    "en": "/src/assets/imgs/gb.webp",
    "es": "/src/assets/imgs/es.webp",
    "fr": "/src/assets/imgs/fr.png",
    "ru": "/src/assets/imgs/ru.png",
    "ko": "/src/assets/imgs/kr.webp",
    "ja": "/src/assets/imgs/jp.webp",
    "sv": "/src/assets/imgs/se.png",
    "cn": "/src/assets/imgs/cn.webp",
  },
  coverUrl: "https://image.tmdb.org/t/p/w342",

   fetchMovies() {
     let url = `${this.apiUrlMovies}&query=${this.searchValue}`;

     console.log(url);
     console.log(this.searchValue);
     axios
       .get(url)
       .then((response) => {
         console.log(response.data.results);
         this.fetchedMovies = response.data.results;
        
        
       })
       .catch((error) => {
         console.log(error);
         console.error(error.message);
       });
   },
   fetchTvShow() {
     let url = `${this.apiUrlTvShow}&query=${this.searchValue}`;

     console.log(url);
     console.log(this.searchValue);
     axios
       .get(url)
       .then((response) => {
         console.log(response.data.results);
         this.fetchedTvShows = response.data.results;
        
       })
       .catch((error) => {
         console.log(error);
         console.error(error.message);
       });
   },
  langToFlag(lang) {
    let flag = this.flags[lang];
    if (flag) {
      return `<img src="${flag}" alt="${lang}" style="width: 50px;">`;
    } else {
      return `Lingua: ${lang}`;
    }
  }
});

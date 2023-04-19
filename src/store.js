import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrlMovies: "https://api.themoviedb.org/3/search/movie?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  apiUrlTvShow: "https://api.themoviedb.org/3/search/tv?api_key=6148d52a02fe2b51e6f0b4078dcb1be4&language=en-US&page=1&include_adult=false",
  searchValue: "",
  fetchedMovies: [],
  fetchedTvShows: [],
  flags: {
    "it": "./assets/imgs/Italia.png",
    "en": "./assets/imgs/gb.webp",
    "es": "./assets/imgs/es.webp",
    "fr": "./assets/imgs/fr.png",
    "ru": "./assets/imgs/ru.png",
    "ko": "./assets/imgs/kr.webp",
    "jp": "./assets/imgs/jp.webp",
    "sv": "./assets/imgs/se.png",
    "cn": "./assets/imgs/cn.webp",
  },
  

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
        this.fetchedTvShow = response.data.results;
        
      })
      .catch((error) => {
        console.log(error);
        console.error(error.message);
      });
  },
  langToFlag(lang) {
    let flag = this.flags[lang];
    if (flag) {
      return `<img src="${flag}" alt="${lang}">`;
    } else {
      return "Bandiera non disponibile";
    }
  }
});

import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrlMovies: "https://api.themoviedb.org/3/search/movie?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  apiUrlTvShow: "https://api.themoviedb.org/3/search/tv?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  searchValue: "",
  // fetchedMovies: [],
  // fetchedTvShows: [],
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
  allResults: {
    movies: [],
    series: [],
  },

  
  getMovies() {
    return axios.get(movie_url);
  },

  getSeries() {
    return axios.get(series_url);
  },

  fetchAllResult() {
    const movie_url = `${this.apiUrlMovies}&query=${this.searchValue}`;
    const series_url = `${this.apiUrlTvShow}&query=${this.searchValue}`;
    console.log(`Fetch result`);

    Promise.all([axios.get(movie_url), axios.get(series_url)])
      .then(([movies, series]) => {
        console.log(movies.data.results);
        console.log(series.data.results);
        this.movies = movies.data.results;
        this.series = series.data.results;
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

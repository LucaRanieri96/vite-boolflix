import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  apiUrlMovies:
    "https://api.themoviedb.org/3/search/movie?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  apiUrlTvShow:
    "https://api.themoviedb.org/3/search/tv?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  coverUrl: "https://image.tmdb.org/t/p/w342",
  searchValue: "",
  allResults: {
    movies: null,
    series: null,
  },

  getMovies() {
    const movie_url = `${this.apiUrlMovies}&query=${this.searchValue}`;
    return axios.get(movie_url);
  },

  getSeries() {
    const series_url = `${this.apiUrlTvShow}&query=${this.searchValue}`;
    return axios.get(series_url);
  },

  fetchAllResult() {
    console.log(`Fetch result`);

     Promise.all([axios.get(movie_url), axios.get(series_url)])
    .then(([movies, series]) => {
      console.log(movies.data);
      console.log(series.data);
      this.allResults.movies = movies.data;
      this.allResults.series = series.data;
    })
    .catch((error) => {
      console.log(error);
      console.error(error.message);
    });
  },
});

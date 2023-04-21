import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  apiUrlMovies:
    "https://api.themoviedb.org/3/search/movie?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  apiUrlTvShow:
    "https://api.themoviedb.org/3/search/tv?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  coverUrl: "https://image.tmdb.org/t/p/w342",
  searchValue: "test",
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
});

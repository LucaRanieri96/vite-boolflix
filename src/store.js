import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrlMovies: "https://api.themoviedb.org/3/search/movie?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  apiUrlTvShow: "https://api.themoviedb.org/3/search/tv?api_key=6148d52a02fe2b51e6f0b4078dcb1be4&language=en-US&page=1&include_adult=false",
  searchValue: "",
  fetchedMovies: [],
  fetchedTvShows: [],
  

  fetchMovies() {
    let url = `${this.apiUrlMovies}&query=${this.searchValue}`;

    console.log(url);
    console.log(this.searchValue);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        this.fetchedMovies = response.data.results;
        console.log(response.data.results[0].original_language);
        
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
        console.log(response.data.results[0].original_language);
        
      })
      .catch((error) => {
        console.log(error);
        console.error(error.message);
      });
  },
  
});

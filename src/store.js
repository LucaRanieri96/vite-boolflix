import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=6148d52a02fe2b51e6f0b4078dcb1be4",
  searchValue: "",
  fetchedMovies: [],
  

  fetchMovies() {
    let url = `${this.apiUrl}&query=${this.searchValue}`;
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
  
});

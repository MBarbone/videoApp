import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/discover/movie?api_key=";
const APIKEY = "API_KEY";
const MOVIEDISCOVER =
  "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + MOVIEDISCOVER);
  }
};

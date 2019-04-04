import axios from 'axios';
import urls from './urls';
import config from './config';

class API {
  static async fetchMovieList() {
    return axios.get(urls.MOVIE_LIST, {
      params: {
        api_key: config.apiKey
      }
    });
  }
}

export default API;

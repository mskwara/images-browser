import { createApi } from 'unsplash-js';

const unsplash = createApi({
  // eslint-disable-next-line no-undef
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
});

class UnsplashManager {
  static getPhotos(key) {
    return unsplash.search.getPhotos({ query: key, page: 1, perPage: 10 });
  }
}

export default UnsplashManager;

import { createApi } from 'unsplash-js';

const unsplash = createApi({
  // eslint-disable-next-line no-undef
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
});

class UnsplashManager {
  static getPhotosList(key) {
    return unsplash.search.getPhotos({ query: key, page: 1, perPage: 10 });
  }

  static getPhoto(photoId) {
    return unsplash.photos.get({ photoId });
  }
}

export default UnsplashManager;

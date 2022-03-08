import _map from 'lodash/map';

const createOptions = (phrases) =>
  _map(phrases, (phrase, index) => ({ id: index, label: phrase }));

export { createOptions };

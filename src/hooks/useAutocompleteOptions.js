import { useState } from 'react';
import _filter from 'lodash/filter';
import _startsWith from 'lodash/startsWith';
import _map from 'lodash/map';
import searchPhrases from 'consts/searchPhrases';

const createOptions = (phrases) =>
  _map(phrases, (phrase, index) => ({ id: index, label: phrase }));

const useAutocompleteOptions = (MIN_LENGTH_TO_SEARCH) => {
  const [options, setOptions] = useState([]);

  const onChange = (event) => {
    const value = event.target.value;
    if (value.length >= MIN_LENGTH_TO_SEARCH) {
      const filteredPhrases = _filter(searchPhrases, (phrase) =>
        _startsWith(phrase, value)
      );
      setOptions(createOptions(filteredPhrases));
    } else {
      setOptions([]);
    }
  };

  return { onChange, options };
};

export default useAutocompleteOptions;

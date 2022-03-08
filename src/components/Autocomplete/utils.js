import _compact from 'lodash/compact';
import _isString from 'lodash/isString';
import _isNil from 'lodash/isNil';

const getOptions = (options, noOptionsText) =>
  _compact([
    options.length === 0
      ? {
          id: -1,
          label: noOptionsText,
        }
      : undefined,
    ...options,
  ]);

const getOptionLabel = (option) => {
  if (_isNil(option)) {
    return '';
  }

  return _isString(option) ? option : option.label;
};

export { getOptions, getOptionLabel };

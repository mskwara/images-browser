import PropTypes from 'prop-types';

const optionsShape = PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.number,
    label: PropTypes.string,
  })
);

export default optionsShape;

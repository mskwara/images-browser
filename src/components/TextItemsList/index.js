import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import _join from 'lodash/join';

const TextItemsList = ({ label, items }) => (
  <Box
    sx={{
      fontSize: 12,
      display: 'flex',
    }}
  >
    <Box>{label}:</Box>
    <Box>{_join(items, ', ')}</Box>
  </Box>
);

TextItemsList.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TextItemsList;

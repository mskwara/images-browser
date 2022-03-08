import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const Header = ({ children }) => (
  <Box
    sx={{
      fontSize: 25,
      margin: (theme) => theme.spacing(2, 0),
    }}
  >
    {children}
  </Box>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;

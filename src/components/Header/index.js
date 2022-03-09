import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const Header = ({ children, sx }) => (
  <Box
    sx={{
      fontSize: 35,
      margin: (theme) => theme.spacing(2, 0),
      fontWeight: 'bold',
      ...sx,
    }}
  >
    {children}
  </Box>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

Header.defaultProps = {
  sx: {},
};

export default Header;

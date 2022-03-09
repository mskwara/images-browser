import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    white: '#fff',
  },
});

const ThemeProvider = ({ children }) => (
  <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;

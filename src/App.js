import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import ThemeProvider from 'providers/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

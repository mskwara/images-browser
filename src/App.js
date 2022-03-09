import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import ThemeProvider from 'providers/ThemeProvider';
import ModalProvider from 'providers/Modal';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ModalProvider>
          <Routing />
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

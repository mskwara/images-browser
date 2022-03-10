import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import ThemeProvider from 'providers/ThemeProvider';
import ModalProvider from 'providers/Modal';

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider>
        <ModalProvider>
          <Routing />
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

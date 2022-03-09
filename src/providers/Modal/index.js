import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from 'components/Modal';
import reducer, { actions } from './reducer';

const initialState = {
  isOpened: false,
  title: '',
  content: null,
};

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {state.isOpened && (
        <Box
          sx={{
            zIndex: 999,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgb(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        >
          <Modal
            title={state.title}
            onClose={() => {
              dispatch({
                type: actions.CLOSE,
              });
            }}
          >
            {state.content}
          </Modal>
        </Box>
      )}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;

export { ModalContext };

import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ title, onClose, children }) => (
  <Box
    sx={{
      width: 500,
      height: 'auto',
      backgroundColor: (theme) => theme.palette.white,
      borderRadius: 2,
      padding: 2,
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box>{title}</Box>
      <CloseIcon sx={{ cursor: 'pointer' }} onClick={onClose} />
    </Box>
    {children}
  </Box>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  title: '',
  onClose: _noop,
};

export default Modal;

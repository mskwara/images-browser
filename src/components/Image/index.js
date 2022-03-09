import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { minTileWidth } from './consts';

const Image = ({ src, alt, variant, label, onClick, sx }) => {
  const widthStyle = variant === 'tile' ? minTileWidth : '100%';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Box
        component="img"
        onClick={onClick}
        src={src}
        alt={alt}
        sx={{
          width: widthStyle,
          maxWidth: widthStyle,
          maxHeight: '100%',
          cursor: onClick ? 'pointer' : 'default',
        }}
      />
      <Box>{label}</Box>
    </Box>
  );
};

Image.propTypes = {
  variant: PropTypes.oneOf(['tile', 'full']),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

Image.defaultProps = {
  variant: 'full',
  alt: '',
  onClick: null,
  label: '',
  sx: {},
};

export default Image;

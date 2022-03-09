import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import { Box } from '@mui/system';
import { minTileWidth } from './consts';

const Image = ({ src, alt, variant, onClick, sx }) => {
  const widthStyle = variant === 'tile' ? minTileWidth : '100%';

  return (
    <Box
      component="img"
      onClick={onClick}
      src={src}
      alt={alt}
      sx={{
        width: widthStyle,
        maxWidth: widthStyle,
        cursor: onClick ? 'pointer' : 'default',
        ...sx,
      }}
    />
  );
};

Image.propTypes = {
  variant: PropTypes.oneOf(['tile', 'full']),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

Image.defaultProps = {
  variant: 'full',
  alt: '',
  onClick: _noop,
  sx: {},
};

export default Image;

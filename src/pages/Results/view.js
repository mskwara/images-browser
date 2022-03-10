import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import { Box } from '@mui/material';
import Image from 'components/Image';
import Autocomplete from 'components/Autocomplete';
import Header from 'components/Header';
import optionsShape from 'shapes/optionsShape';
import { MIN_LENGTH_TO_SEARCH } from './consts';
import validationSchema from './validation';
import messages from './messages';

const ResultsView = ({
  onSubmit,
  options,
  onChange,
  keyValue,
  photos,
  initialValues,
  onImageClick,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form>
      <Box
        sx={{
          width: '100%',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ width: '50%', minWidth: 300 }}>
          <Autocomplete
            name="key"
            options={options}
            label={messages.autocompleteLabel}
            onChange={onChange}
            minLengthToSearch={MIN_LENGTH_TO_SEARCH}
          />
        </Box>
        <Header sx={{ alignSelf: 'flex-start' }}>{keyValue}</Header>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {_map(photos, (photo) => (
            <Image
              src={photo.image}
              variant="tile"
              onClick={() => onImageClick(photo.id)}
              sx={{ padding: 0.5 }}
              key={photo.id}
            />
          ))}
        </Box>
      </Box>
    </Form>
  </Formik>
);

ResultsView.propTypes = {
  keyValue: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    key: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func,
  options: optionsShape,
  onChange: PropTypes.func,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  onImageClick: PropTypes.func,
};

ResultsView.defaultProps = {
  options: [],
  PHOTOS: [],
  onChange: _noop,
  onImageClick: _noop,
  onSubmit: _noop,
};

export default ResultsView;

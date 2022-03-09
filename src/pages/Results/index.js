import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import _map from 'lodash/map';
import { Box } from '@mui/material';
import Image from 'components/Image';
import Autocomplete from 'components/Autocomplete';
import UnsplashManager from 'utils/UnsplashManager';
import useAutocompleteOptions from 'hooks/useAutocompleteOptions';
import { MIN_LENGTH_TO_SEARCH, initialValues } from './consts';
import validationSchema from './validation';
import messages from './messages';
import Header from 'components/Header';

const Results = () => {
  const navigate = useNavigate();
  const { onChange, options } = useAutocompleteOptions(MIN_LENGTH_TO_SEARCH);
  const [photos, setPhotos] = useState([]);
  const { key } = useParams();

  useEffect(() => {
    UnsplashManager.getPhotos(key).then((res) => {
      const data = res.response.results;
      setPhotos(
        _map(data, (entry) => ({
          id: entry.id,
          image: entry.urls.regular,
        }))
      );
    });
  }, [key]);

  const onSubmit = (values) => {
    navigate(`/images/${values.key}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Box
          sx={{
            width: '100vw',
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
          <Header sx={{ alignSelf: 'flex-start' }}>{key}</Header>
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
                sx={{ padding: 0.5 }}
                key={photo.id}
              />
            ))}
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default Results;

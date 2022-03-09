import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Box } from '@mui/system';
import _filter from 'lodash/filter';
import _startsWith from 'lodash/startsWith';
import Autocomplete from 'components/Autocomplete';
import searchPhrases from 'consts/searchPhrases';
import backgroundImage from 'assets/background.jpg';
import { createOptions } from './utils';
import { MIN_LENGTH_TO_SEARCH, initialValues } from './consts';
import messages from './messages';
import validationSchema from './validation';

const Home = () => {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const onChange = (event) => {
    const value = event.target.value;
    if (value.length >= MIN_LENGTH_TO_SEARCH) {
      const filteredPhrases = _filter(searchPhrases, (phrase) =>
        _startsWith(phrase, value)
      );
      setOptions(createOptions(filteredPhrases));
    } else {
      setOptions([]);
    }
  };

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
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
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
        </Box>
      </Form>
    </Formik>
  );
};

export default Home;

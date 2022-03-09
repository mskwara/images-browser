import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Box } from '@mui/system';
import Autocomplete from 'components/Autocomplete';
import backgroundImage from 'assets/background.jpg';
import useAutocompleteOptions from 'hooks/useAutocompleteOptions';
import { MIN_LENGTH_TO_SEARCH, initialValues, trendingItems } from './consts';
import messages from './messages';
import validationSchema from './validation';
import Header from 'components/Header';
import TextItemsList from 'components/TextItemsList';

const Home = () => {
  const navigate = useNavigate();
  const { onChange, options } = useAutocompleteOptions(MIN_LENGTH_TO_SEARCH);

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
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            paddingTop: 5,
            boxSizing: 'border-box',
          }}
        >
          <Box
            sx={{
              width: '50%',
              minWidth: 300,
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: (theme) => theme.palette.white,
            }}
          >
            <Header>{messages.unsplash}</Header>
            <Box>{messages.description}</Box>
            <Box sx={{ width: '100%', margin: (theme) => theme.spacing(2, 0) }}>
              <Autocomplete
                name="key"
                options={options}
                label={messages.autocompleteLabel}
                onChange={onChange}
                minLengthToSearch={MIN_LENGTH_TO_SEARCH}
              />
            </Box>
            <TextItemsList label={messages.trending} items={trendingItems} />
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default Home;

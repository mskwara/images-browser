import React from 'react';
import { Box } from '@mui/system';
import Autocomplete from 'components/Autocomplete';
import messages from './messages';

const Home = () => {
  return (
    <Box>
      <Autocomplete label={messages.autocompleteLabel} />
    </Box>
  );
};

export default Home;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MUIAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

const Autocomplete = ({ options, label }) => {
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;

  return (
    <MUIAutocomplete
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

Autocomplete.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      label: PropTypes.string,
    })
  ),
};

Autocomplete.defaultProps = {
  options: [],
};

export default Autocomplete;

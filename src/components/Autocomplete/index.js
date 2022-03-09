import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';
import MUIAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import optionsShape from 'shapes/optionsShape';
import { getOptions, getOptionLabel } from './utils';
import messages from './messages';

const Autocomplete = ({
  options,
  label,
  name,
  minLengthToSearch,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const { values, setFieldValue, errors, submitForm } = useFormikContext();

  const value = values[name];

  const noOptionsText =
    value.length >= minLengthToSearch
      ? messages.noOptions
      : messages.encourageText;

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
      getOptionLabel={getOptionLabel}
      filterOptions={(options) => options}
      getOptionDisabled={(option) => option.id < 0}
      freeSolo
      options={getOptions(options, noOptionsText)}
      onChange={(_, option, reason) => {
        const value = getOptionLabel(option);
        setFieldValue(name, value);
        onChange({ target: { value } });

        if (reason === 'selectOption') {
          submitForm();
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={value.length === 0 ? label : ''}
          error={!_isEmpty(errors[name])}
          onChange={(event) => {
            setFieldValue(name, event.target.value);
            onChange(event);
          }}
          InputProps={{
            ...params.InputProps,
            sx: { backgroundColor: (theme) => theme.palette.white },
          }}
          InputLabelProps={{
            shrink: false,
          }}
        />
      )}
    />
  );
};

Autocomplete.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: optionsShape,
  minLengthToSearch: PropTypes.number,
  onChange: PropTypes.func,
};

Autocomplete.defaultProps = {
  options: [],
  onChange: _noop,
  minLengthToSearch: 0,
};

export default Autocomplete;

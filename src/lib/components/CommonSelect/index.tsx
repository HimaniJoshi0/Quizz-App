import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

interface CommonSelectProps {
  label: string;
  validations?: any; // e.g., register('level')
  error?: boolean;
  helperText?: string;
  options?: { label: string; value: string | number }[];
}

const CommonSelect = ({
  label,
  validations,
  error = false,
  helperText = '',
  options = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'difficult', label: 'Difficult' },
  ],
}: CommonSelectProps) => {
  const labelId = `${validations?.name || label}-label`;

  return (
    <Box sx={{ minWidth: 120, mt: 2 }}>
      <FormControl fullWidth error={error} variant="standard">
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          label={label}
          {...validations}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default CommonSelect;

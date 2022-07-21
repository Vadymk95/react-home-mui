import React, { ChangeEvent, FC } from 'react';

import { TextField } from '@mui/material';

type SearchProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search: FC<SearchProps> = ({ onChange, value }) => {
  return (
    <TextField
      type="search"
      value={value}
      onChange={onChange}
      variant="standard"
      label="search"
      fullWidth
      sx={{ mb: '1.5rem' }}
    />
  );
};

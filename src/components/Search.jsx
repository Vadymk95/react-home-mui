import { TextField } from '@mui/material';

export const Search = (props) => {
  const { onChange, value } = props;

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

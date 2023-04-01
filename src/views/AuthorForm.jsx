import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AuthorForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, startDate, bio });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthorForm;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

export default props => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" />
      <Typography variant="headline" color="inherit">
        Submission entry
      </Typography>
    </Toolbar>
  </AppBar>
);

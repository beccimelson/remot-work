import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Jobs/Dialogs/Create';

export default ({ types, onJobCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Job Board
      </Typography>

      <CreateDialog types={types} onCreate={onJobCreate} />
    </Toolbar>
  </AppBar>
);

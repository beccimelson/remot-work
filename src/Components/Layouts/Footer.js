import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import 'typeface-roboto';

const styles = {
  H3: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    background: '#DA552F',
    textAlign: 'center',
    color: '#FFFFFF'
  }
};

const Footer = props => {
  return (
    <Paper>
      <Typography variant="headline" component="h3" align="center">
        Work Remotely.
      </Typography>
      <Typography component="p" align="center">
        Verified remote jobs that offer the freedom to work anywhere. Find the
        most qualified people - Hire remote!
      </Typography>
    </Paper>
  );
};

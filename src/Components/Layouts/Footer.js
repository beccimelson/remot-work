import React from 'react';
import { Paper } from '@material-ui/core';

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
      <h3 style={styles.H3}>
        Like this site? remot.work is on Product Hunt right now
      </h3>
    </Paper>
  );
};

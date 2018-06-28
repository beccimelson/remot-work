import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

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

export default ({ types, category, onSelect }) => {
  const index = category ? types.findIndex(group => group === category) + 1 : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : types[index - 1]);

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {types.map(group => <Tab key={group} label={group} />)}
      </Tabs>
      <h3 style={styles.H3}>
        Like this site? remot.work is on Product Hunt right now
      </h3>
    </Paper>
  );
};

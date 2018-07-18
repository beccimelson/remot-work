import React from 'react';
import {
  AppBar,
  Toolbar,
  Paper,
  Tabs,
  Tab,
  Typography,
  Button
} from '@material-ui/core';
import CreateDialog from '../Jobs/Dialogs/Create';
import withWidth from '@material-ui/core/withWidth';
import 'typeface-roboto';

export default withWidth()(
  ({ types, category, onSelect, onJobCreate, width }) => {
    const index = category
      ? types.findIndex(group => group === category) + 1
      : 0;

    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : types[index - 1]);

    return (
      <div>
        <Paper>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="headline"
                color="inherit"
                style={{ flex: 1 }}
              >
                LOGO
              </Typography>
              <Button href="mailto:beccimelson@gmail.com">Contact</Button>
            </Toolbar>
          </AppBar>
          <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            centered={width !== 'xs'}
            scrollable={width === 'xs'}
            scrollButtons="on"
          >
            <Tab label="All" />
            {types.map(group => <Tab key={group} label={group} />)}
          </Tabs>
          <Paper>
            <Typography variant="headline" component="h3" align="center">
              Do You Want To Work Remotely?
            </Typography>
            <Typography component="p" align="center">
              Browse verified remote jobs that offer the freedom to work
              anywhere.
            </Typography>
            <Typography component="p" align="center">
              Find the most qualified people - Hire remote!
            </Typography>
            <CreateDialog types={types} onCreate={onJobCreate} />
          </Paper>
        </Paper>
      </div>
    );
  }
);

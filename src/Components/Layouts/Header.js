import React from 'react';
import {
  AppBar,
  Toolbar,
  Paper,
  Tabs,
  Tab,
  Typography
} from '@material-ui/core';
import CreateDialog from '../Jobs/Dialogs/Create';
import withWidth from '@material-ui/core/withWidth';

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
              <CreateDialog types={types} onCreate={onJobCreate} />
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
              Work Remotely.
            </Typography>
            <Typography component="p" align="center">
              Verified remote jobs that offer the freedom to work anywhere. Find
              the most qualified people - Hire remote!
            </Typography>
          </Paper>
        </Paper>
      </div>
    );
  }
);

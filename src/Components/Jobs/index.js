import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    height: 600,
    overflowY: 'auto'
  }
};

export default ({
  jobs,
  category,
  onSelect,
  job: {
    id,
    title = 'Welcome!',
    description = 'Please select a job from the list on the left.'
  }
}) => (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper style={styles.Paper}>
        {jobs.map(
          ([group, jobs]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {jobs.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    {/* 
    <Grid item xs={12} sm={6}>
      <Paper style={styles.Paper}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading">{description}</Typography>
      </Paper>
    </Grid>
    */}
  </Grid>
);

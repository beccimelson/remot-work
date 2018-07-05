import React, { Component, Fragment } from 'react';
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl: {
    width: 400
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      job: {
        title: '',
        description: '',
        types: ''
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        job: {
          ...this.state.job,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      //TODO: validate

      const { job } = this.state;

      this.props.onCreate({
        ...job,
        id: job.title.toLocaleLowerCase().replace(/ /g, '-')
      });

      this.setState({
        open: false,
        job: {
          title: '',
          types: '',
          description: ''
        }
      });
    };

    render() {
      const {
          open,
          job: { title, description, types }
        } = this.state,
        { classes, types: categories } = this.props;

      return (
        <Fragment>
          <Button variant="fab" onClick={this.handleToggle} mini>
            <Add />
          </Button>
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogTitle>Post a job for $50</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below to submit your job for review.
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange('title')}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="types">Job Type</InputLabel>
                  <Select value={types} onChange={this.handleChange('types')}>
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  label="Description"
                  value={description}
                  onChange={this.handleChange('description')}
                  margin="normal"
                  multiline
                  rows="4"
                  className={classes.FormControl}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
              >
                Post Job
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);

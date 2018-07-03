import React, { Component, Fragment } from 'react';
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default class extends Component {
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

  render() {
    const {
      open,
      job: { title, description, types }
    } = this.state;

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
              />
              <br />
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
              <br />
              <TextField
                label="Types"
                value={types}
                onChange={this.handleChange('types')}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Post Job
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

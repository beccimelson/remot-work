import React, { Component, Fragment } from 'react';
import { Dialog, Button } from '@material-ui/core';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core/Dialog';
import { Add } from '@material-ui/icons';

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Post a job for $50</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below to submit your job for review.
            </DialogContentText>
            <form />
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

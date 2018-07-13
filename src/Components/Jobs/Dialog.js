import React, { Component, Fragment } from 'react';
import {
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Form from '../Form';

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
    const { open } = this.state,
      { types, onCreate } = this.props;

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>Post a job for $50</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below to submit your job for review. All
              jobs are verified (within 2 hours) prior to posting.
            </DialogContentText>
            <Form types={types} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

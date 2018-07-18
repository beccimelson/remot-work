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
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl: {
    width: 400
  },

  createButton: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },

  Typography: {
    fontFamily: ['Roboto'].join(',')
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
          <Button
            className={classes.createButton}
            variant="contained"
            onClick={this.handleToggle}
            size="large"
            color="primary"
          >
            Post a job for $50
          </Button>
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogTitle>Post a Job on Remote.work for $50</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p>
                  Glad you’re posting a job! Remot.work is only for roles that
                  allow people to work from anywhere—away from the company
                  office.
                </p>
                <p>Listings are active until you have filled the position.</p>
                <br />
                <p>STEP 1: CREATE YOUR AD</p>
                <p>First, tell us about the position</p>
              </DialogContentText>

              <form>
                <TextField
                  label="Job Title"
                  value={title}
                  onChange={this.handleChange('title')}
                  margin="normal"
                  className={classes.FormControl}
                />

                <br />

                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="types">Job Category</InputLabel>
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
                  label="Job Description"
                  value={description}
                  onChange={this.handleChange('description')}
                  margin="normal"
                  multiline
                  rows="4"
                  className={classes.FormControl}
                />

                <br />

                <TextField
                  label="Salary"
                  // value={title}
                  onChange={this.handleChange('salary')}
                  margin="normal"
                  className={classes.FormControl}
                />

                <br />

                <TextField
                  label="How to Apply"
                  value={description}
                  onChange={this.handleChange('howtoapply')}
                  margin="normal"
                  multiline
                  rows="4"
                  className={classes.FormControl}
                />

                <TextField
                  label="Apply URL"
                  // value={title}
                  onChange={this.handleChange('apply')}
                  margin="normal"
                  className={classes.FormControl}
                />

                <br />

                <DialogContentText>
                  <br />
                  <p>STEP 2: TELL US ABOUT YOUR COMPANY</p>
                </DialogContentText>
                <TextField
                  label="Company Name"
                  // value={title}
                  onChange={this.handleChange('coname')}
                  margin="normal"
                  className={classes.FormControl}
                />

                <br />

                <TextField
                  label="Company Website"
                  // value={title}
                  onChange={this.handleChange('url')}
                  margin="normal"
                  className={classes.FormControl}
                />

                <br />

                <TextField
                  label="Want to share more? (mission statement, culture, HQ, etc)"
                  value={description}
                  onChange={this.handleChange('statement')}
                  margin="normal"
                  multiline
                  rows="4"
                  className={classes.FormControl}
                />

                <br />

                <TextField
                  label="Your Email"
                  // value={title}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  className={classes.FormControl}
                />
                <DialogContentText>
                  This is where we’ll send your confirmation email.
                </DialogContentText>
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
              >
                STEP 3: PREVIEW JOB AND SUBMIT FOR REVIEW
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);

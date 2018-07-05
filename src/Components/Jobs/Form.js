import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button
} from '@material-ui/core';

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      title: '',
      company: '',
      description: '',
      types: ''
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
      // TODO: validate

      const { job } = this.state;

      this.props.onSubmit({
        ...job,
        id: job.title.toLocaleLowerCase().replace(/ /g, '-')
      });

      this.setState({
        open: false,
        job: {
          title: '',
          company: '',
          types: '',
          description: ''
        }
      });
    };

    render() {
      const { title, company, description, types } = this.state,
        { classes, types: categories } = this.props;

      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <TextField
            label="Company"
            value={company}
            onChange={this.handleChange('company')}
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
            multiline
            rows="4"
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            Post Job
          </Button>
        </form>
      );
    }
  }
);

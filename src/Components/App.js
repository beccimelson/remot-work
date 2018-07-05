import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Jobs from './Jobs';
import { types, jobs } from '../store.js';

export default class extends Component {
  state = {
    jobs,
    job: {}
  };

  getJobsbyType() {
    return Object.entries(
      this.state.jobs.reduce((jobs, job) => {
        const { types } = job;

        jobs[types] = jobs[types] ? [...jobs[types], job] : [job];

        return jobs;
      }, {})
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleJobSelect = id => {
    this.setState(({ jobs }) => ({
      job: jobs.find(jb => jb.id === id)
    }));
  };

  handleJobCreate = job => {
    this.setState(({ jobs }) => ({
      jobs: [...jobs, job]
    }));
  };

  render() {
    const jobs = this.getJobsbyType(),
      { category, job } = this.state;

    return (
      <Fragment>
        <Header types={types} onJobCreate={this.handleJobCreate} />

        <Jobs
          job={job}
          jobs={jobs}
          category={category}
          onSelect={this.handleJobSelect}
        />

        <Footer
          category={category}
          types={types}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

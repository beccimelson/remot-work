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

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleJobSelected = id => {
    this.setState(({ jobs }) => ({
      job: jobs.find(jb => jb.id === id)
    }));
  };

  render() {
    const jobs = this.getJobsbyType(),
      { category, job } = this.state;

    return (
      <Fragment>
        <Header />

        <Jobs
          job={job}
          jobs={jobs}
          category={category}
          onSelect={this.handleJobSelected}
        />

        <Footer
          category={category}
          types={types}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

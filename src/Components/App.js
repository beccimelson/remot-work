import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Jobs from "./Jobs";
import { JobTypes } from "./Layouts";
import { jobType, job } from "../store.js";

export default class extends Component {
  states = { job };
  render() {
    return (
      <Fragment>
        <Header />

        <JobTypes jobType={jobType} />

        <Jobs />

        <Footer />
      </Fragment>
    );
  }
}

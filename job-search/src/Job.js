import React, { Component } from "react";

export class Job extends Component {
  constructor(props) {
    super(props);
  }

  printSalary = (num) => {
    let formatter = new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",

      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(num); /* $2,500.00 */
  };

  printSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <div key={skill} className="ui horizontal label">
          {skill}
        </div>
      );
    });
  };

  handleDeleteJob = () => {
    this.props.onDeleteJob(this.props.job.id);
  }

  render() {
    const job = this.props.job;

    return (
      <div className="item">
        <div className="content">
          <div className="header">{job.title}</div>
          <div>Category: {job.category}</div>
          <div className="">
            <span className="price">
              Salary: {this.printSalary(job.salaryPkr)}
            </span>
          </div>
          <div className="">
            <span className="price">Experience: {job.minExpYears} years</span>
          </div>
          <div>
            Skills:
            {this.printSkills(job.skills)}
          </div>
          <div>
            <button
              className="ui circular edit icon button"
              onClick={this.props.onOpenForm}
            >
              <i className="edit icon"></i>
            </button>
            <button onClick={this.handleDeleteJob} className="ui circular trash icon button">
              <i className="trash icon"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;

import React, { Component } from 'react'
import { timeDifferenceForDate } from '../utils'

class Report extends Component {

  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="ml1">
          <div className="f6 lh-copy gray">
            <span>{this.props.index + 1}. {this.props.report.user.name} | {timeDifferenceForDate(this.props.report.createdAt)}</span>
          </div>
          <div className="f6 lh-copy">
            {this.props.report.description}
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default Report

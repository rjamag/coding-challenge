import React, { Component } from 'react'

class Report extends Component {

  render() {
    return (
      <div className="flex mt2 items-start">

        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
        </div>

        <div className="ml1">
          <div>
            {this.props.report.description}
          </div>
        </div>

      </div>
    )
  }
}

export default Report

import React, { Component } from 'react'
import Report from './Report'

class ReportList extends Component {

  render() {
    return (
      <div>
        <div>
          <h3>Fake News Reports</h3>
        </div>

        {this.props.reports.map((report, index) => (
          <Report key={report.id} index={index} report={report}/>
        ))}

      </div>
    )
  }
}

export default ReportList

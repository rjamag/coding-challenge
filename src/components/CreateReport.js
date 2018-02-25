import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'
import ReportList from './ReportList'

class CreateReport extends Component {
  state = {
    linkId: '',
    linkUrl: '',
    linkDescription: '',
    description: '',
    reports: [],
  }

  componentDidMount() {
    this._executeSearchReports()
  }

  render() {
    if (this.state.linkDescription === '' && this.state.linkUrl === '') {
      return <div>Loading</div>
    }

    return (
      <div>
        <h3>{this.state.linkDescription} <br /> {this.state.linkUrl}</h3>

        <div className="flex flex-column mt3">
          <textarea
            className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
            onChange={e => this.setState({ description: e.target.value })}
            value={this.state.description}
            type="text"
            placeholder="Enter a description for the fake news report"
            maxLength="2000"
            required
          />
        </div>

        <button onClick={() => this._createReport()} disabled={!this.state.description}>Report Fake News</button>

        <ReportList
          linkId={this.state.linkId}
          reports={this.state.reports}
        />

      </div>
    )
  }

  _executeSearchReports = async () => {
    const linkId = this.props.match.params.id

    const result = await this.props.client.query({
      query: FEED_REPORTS_QUERY,
      variables: { filter: linkId },
      options: { pollInterval: 5000 },
    })

    const reports = result.data.feedReportsFromLink.links[0].reports
    const linkUrl = result.data.feedReportsFromLink.links[0].url
    const linkDescription = result.data.feedReportsFromLink.links[0].description

    this.setState({
      linkId,
      linkUrl,
      linkDescription,
      reports,
    })
  }

  _createReport = async () => {
    const { description } = this.state
    const linkId = this.props.match.params.id

    await this.props.reportMutation({
      variables: {
        description,
        linkId,
      },
      update: (store, { data: { report } }) => {
        const data = store.readQuery({
          query: FEED_REPORTS_QUERY,
          variables: {
            filter: linkId,
          },
        })

        data.feedReportsFromLink.links[0].reports = report.link.reports

        store.writeQuery({ query: FEED_REPORTS_QUERY, data })

        const reports = data.feedReportsFromLink.links[0].reports

        this.setState({
          reports,
          description: ''
        })
      },
    })
  }
}

const REPORT_MUTATION = gql`
  mutation ReportMutation($linkId: ID!, $description: String!) {
    report(linkId: $linkId, description: $description) {
      id
      description
      link {
        reports {
          id
          description
          createdAt
          user {
            id
            name
          }
        }
      }
      user {
        id
      }
    }
  }
`

const FEED_REPORTS_QUERY = gql`
  query FeedReportsFromLinkQuery($filter: String!) {
    feedReportsFromLink(filter: $filter) {
      links {
        id
        url
        description
        reports {
          id
          description
          createdAt
          user {
            id
            name
          }
        }
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

export default withApollo(graphql(REPORT_MUTATION, { name: 'reportMutation' })(
  CreateReport,
))

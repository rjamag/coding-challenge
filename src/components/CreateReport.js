import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import ReportList from './ReportList'

export class CreateReport extends Component {
  state = {
    description: '',
  }

  render() {
    if (this.props.feedReportsQuery && this.props.feedReportsQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.feedReportsQuery && this.props.feedReportsQuery.error) {
      return <div>Error</div>
    }

    return (
      <div>
        <h3>{this.props.feedReportsQuery.feedReportsFromLink.links[0].description} <br /> {this.props.feedReportsQuery.feedReportsFromLink.links[0].url}</h3>

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
          linkId={this.props.match.params.id}
          reports={this.props.feedReportsQuery.feedReportsFromLink.links[0].reports}
        />
      </div>
    )
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
          }
        })

        data.feedReportsFromLink.links[0].reports = report.link.reports

        store.writeQuery({ query: FEED_REPORTS_QUERY, data })

        this.setState({
          description: ''
        })
      },
    })
  }
}

export const REPORT_MUTATION = gql`
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

export const FEED_REPORTS_QUERY = gql`
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
      }
    }
  }
`

export default compose(
  graphql(REPORT_MUTATION, {
    name: 'reportMutation'
  }),
  graphql(FEED_REPORTS_QUERY, {
    name: 'feedReportsQuery',
    options: ({ match: { params: { id } } }) => ({
      variables: { filter: id }
    })
  }),
)(CreateReport)

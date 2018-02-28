import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Report from '../components/Report'
import { timeDifferenceForDate } from '../utils'

const myreport = {
  "id": "cje6t8c1t08pv0140ju8jtxmo",
  "description": "este e um teste",
  "createdAt": "2018-02-28T08:19:25.000Z",
  "user":
    {
      "id": "cje55icc7006i01403v3lgypb",
      "name": "Rodrigo",
      "__typename": "User"
    },
  "__typename": "Report"
}

describe('<Report/>', () => {

  it('should render without throwing an error', () => {
    const wrapper = shallow(<Report key={myreport.id} index={1} report={myreport} />)

    expect(wrapper.find(Report))

    expect(
      wrapper.containsMatchingElement(
        <div className="f6 lh-copy">
          {wrapper.props('report.description')}
        </div>
      )
    ).toBeTruthy()

  })

})

import React from 'react'
import ReactDOM from 'react-dom'
import Report from '../components/Report'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Report', () => {

  it('should be defined', () => {
    expect(Report).toBeDefined()
  })

})

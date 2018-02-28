import React from 'react'
import ReactDOM from 'react-dom'
import Report from '../components/Report'
import { shallow, mount, render } from 'enzyme';

describe('Report', () => {

  it('should render without throwing an error', () => {
    const wrapper = shallow(<Report />)
    console.log('oi')

  })

})

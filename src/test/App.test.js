import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Switch, Route, Redirect } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {

  it('should be defined', () => {
    expect(App).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <App name='button test' />
    )

    expect(tree).toMatchSnapshot()
  })

})

describe('Route', () => {
  it('should be defined', () => {
    expect(Route).toBeDefined()
  })
})

describe('Redirect', () => {
  it('should be defined', () => {
    expect(Redirect).toBeDefined()
  })
})

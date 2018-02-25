import React from 'react';
import ReactDOM from 'react-dom';
import Report from '../src/components/Report';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Report', () => {

  it('should be defined', () => {
    expect(Report).toBeDefined();
  })

  it('renders without crashing', () => {
    const div2 = document.createElement('div');
    ReactDOM.render(<Report index="1" report="" name="test" />, div2);
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Report index="1" report="" name="test" />
    );
    expect(tree).toMatchSnapshot();
  })

})

import React from 'react';
import ReactDOM from 'react-dom';
import ReportList from '../src/components/ReportList';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('ReportList', () => {

  it('should be defined', () => {
    expect(ReportList).toBeDefined();
  })

  it('renders without crashing', () => {
    const div2 = document.createElement('div');
    ReactDOM.render(<ReportList linkId='1' reports="" />, div2);
  })

  it('should render correctly', () => {
    const tree = shallow(
      <ReportList linkId="1" reports="" />
    );
    expect(tree).toMatchSnapshot();
  })

})

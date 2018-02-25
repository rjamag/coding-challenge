import React from 'react';
import ReactDOM from 'react-dom';
import CreateReport from '../src/components/CreateReport';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('CreateReport', () => {

  it('should be defined', () => {
    expect(CreateReport).toBeDefined();
  })

  it('renders without crashing', () => {
    const div2 = document.createElement('div');
    ReactDOM.render(<CreateReport />, div2);
  })

  it('should render correctly', () => {
    const tree = shallow(
      <CreateReport name='button test' />
    );
    expect(tree).toMatchSnapshot();
  })

})

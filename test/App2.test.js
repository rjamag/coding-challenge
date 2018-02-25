import React from 'react';
import ReactDOM from 'react-dom';
import App2 from '../src/components/App2';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('App2', () => {

  it('should be defined', () => {
    expect(App2).toBeDefined();
  })

  it('renders without crashing', () => {
    const div2 = document.createElement('div');
    ReactDOM.render(<App2 />, div2);
  })

  it('should render correctly', () => {
    const tree = shallow(
      <App2 name='button test' />
    );
    expect(tree).toMatchSnapshot();
  })

})

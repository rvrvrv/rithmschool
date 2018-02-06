import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import SimpleComponent from '../SimpleComponent';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render one <SimpleComponent /> component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SimpleComponent)).toHaveLength(1);
});

test('should render with a class of App-intro', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-intro')).toHaveLength(1);
});

test('should detect state and all h1\'s on mounting', () => {
  const wrapper = mount(<App />);
  expect(wrapper.state('name')).toBe('Test app');
  expect(wrapper.find('h1')).toHaveLength(2);
});

test('<SimpleComponent /> should have valid props', () => {
  const wrapper = render(<App />);
  expect(wrapper.text()).toContain('John');
  expect(wrapper.text()).toContain('Doe');
  expect(wrapper.text()).toContain('Pizza');
});

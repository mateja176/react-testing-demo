import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <code>src/App.tsx</code>;
  expect(wrapper).toContainReact(welcome);
});

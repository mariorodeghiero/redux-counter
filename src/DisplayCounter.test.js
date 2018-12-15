import React from 'react';
import { shallow } from 'enzyme';
import { DisplayCounter } from './DisplayCounter';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('<DisplayCounter/>', () => {
  it('mounts', () => {
    const wrapper = shallow(<DisplayCounter count={10} />);
    expect(wrapper.contains(<p>The counter is in 10</p>)).toBe(true);
  });
});

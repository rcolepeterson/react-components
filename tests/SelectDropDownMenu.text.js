// http://airbnb.io/enzyme/docs/guides/tape-ava.html
import test from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../client/components/SelectDropDown';
configure({ adapter: new Adapter() });

test('shallow', t => {
  const list = [{ label: 'cole', id: '1' }, { label: 'dan', id: '2345' }];
  const wrapper = shallow(
    <Select
      list={list}
      selectedValue={'-1'}
      handleChange={e => {
        console.log;
      }}
    />
  );
  t.equal(wrapper.contains(<option value="1">cole</option>), true);
  t.equal(wrapper.contains(<option value="2345">dan</option>), true);
  t.end();
});

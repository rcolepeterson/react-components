import React from 'react';
import Select from './SelectDropDown';
import CodeSplitting from './CodeSplitting';
import { store, reducer } from '../lib/store';
import pubsub from '../lib/pubsub';
import SimpleHOC from './SimpleHOC';
import Hero from './Hero';

const APP = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'Select'
    };

    // add drop down select binding.
    this.handleSelectChange = this.handleSelectChange.bind(this);

    // store tester
    const s = store(reducer);
    s.subscribe(() => console.log(`store items = ${s.getState()}`));
    s.dispatch({ type: 'add', item: 'cole' });
    s.dispatch({ type: 'add', item: 'peterson' });

    //observable pattern tester
    const events = pubsub();
    events.subscribe('MyEvent', () => console.log('My event fired'));
    events.publish('MyEvent');
  }

  /***********************************
   * Handlers
   **********************************/

  /**
   * Select Drop Down menu click handler.
   */
  handleSelectChange(e) {
    this.setState({ selectedValue: e.target.value });
  }

  render() {
    const list = [
      { label: 'cole', id: 0 },
      { label: 'dan', id: 1 },
      { label: 'ralph', id: 2 }
    ];
    // drop down selected msg.
    const selectMsg = `You have selected item: ${this.state.selectedValue}`;
    const MySimpleHOC = SimpleHOC(Hero);
    return (
      <div>
        <h3>{selectMsg}</h3>
        <Select
          handleChange={this.handleSelectChange}
          list={list}
          selectedValue={this.state.selectedValue}
        />
        <br />
        <CodeSplitting />
        <br />
        <MySimpleHOC name="SimpleHOC" />
      </div>
    );
  }
};

export default APP;

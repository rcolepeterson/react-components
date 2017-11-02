import React from 'react';
import Select from './select';

const APP = class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { selectedValue: 'Select'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selectedValue: e.target.value });
  }

  render() {
    let list = [{ label: 'cole', id: 0 }, { label: 'dan', id: 1 }, { label: 'ralph', id: 2 }];
    let msg = `You have selected item: ${this.state.selectedValue}`;
    return (
      <div>
        <h3>{msg}</h3>
        <Select handleChange={this.handleChange} list={list} selectedValue={this.state.selectedValue} />
      </div>
    )
  }
}

export default APP;

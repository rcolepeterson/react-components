import React from "react";
import Select from "./SelectDropDown";
import CodeSplitting from "./CodeSplitting";

const APP = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "Select"
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
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
      { label: "cole", id: 0 },
      { label: "dan", id: 1 },
      { label: "ralph", id: 2 }
    ];
    const selectMsg = `You have selected item: ${this.state.selectedValue}`;
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
      </div>
    );
  }
};

export default APP;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.Number
    })
  ).isRequired
};

const SelectDropDown = props => (
  <div>
    <select value={props.selectedValue} onChange={e => props.handleChange(e)}>
      <option value="-1">Select</option>
      {props.list ? (
        props.list.map(item => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))
      ) : (
        <option>loading</option>
      )}
    </select>
  </div>
);

SelectDropDown.propTypes = propTypes;
export default SelectDropDown;

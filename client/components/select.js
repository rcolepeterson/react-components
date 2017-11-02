import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  list: PropTypes.arrayOf({
    id: PropTypes.Number,
    label: PropTypes.string
  }).isRequired
};

const Select = props => (
  <div>
    <select value={props.selectedValue} onChange={e => props.handleChange(e)}>
      <option value="default">{props.selectedValue}</option>
      {props.list
        ? props.list.map((item) => (
          <option key={item.id} value={item.id}>{item.label}</option>
        ))
        : <option>loading</option>}
    </select>
  </div>
);

Select.propTypes = propTypes;
export default Select;
import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {
  name: PropTypes.string
};
const defaultProps = {
  name: 'no name passed in'
};
const Hero = props => <h1>Hero {props.name}</h1>;
Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
export default Hero;

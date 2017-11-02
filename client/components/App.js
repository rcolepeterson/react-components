import "babel-polyfill";
import React from "react";

const APP = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lazyHero: null
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  async loadHero() {
    const {
      default: Hero
    } = await import(/* webpackChunkName: "hero" */ "./Hero");
    this.setState({
      lazyHero: Hero
    });
  }

  clickHandler() {
    this.loadHero();
  }

  render() {
    const Hero = this.state.lazyHero;

    return (
      <div>
        <button onClick={this.clickHandler}>
          CLICK ME TO LOAD HERO COMPONENT
        </button>
        {Hero ? <Hero /> : <div>no hero</div>}
      </div>
    );
  }
};

export default APP;

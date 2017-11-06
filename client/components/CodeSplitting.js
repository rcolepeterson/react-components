// babel-polyfill: needed for Async support.
// babelrc plugins: "plugins": ["syntax-dynamic-import", "dynamic-import-webpack"],
import 'babel-polyfill';
import React from 'react';

const APP = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lazyHero: null
    };
    this.loadHero = this.loadHero.bind(this);
  }

  /**
   * Async Loading.
   */
  async loadHero() {
    const {
      default: Hero
    } = await import(/* webpackChunkName: "hero" */ './Hero');
    this.setState({
      lazyHero: Hero
    });
  }

  render() {
    const Hero = this.state.lazyHero;
    return (
      <div>
        <button onClick={this.loadHero}>
          CLICK ME TO ASYNC LOAD HERO COMPONENT
        </button>
        {Hero ? <Hero /> : <p>no hero yet</p>}
      </div>
    );
  }
};

export default APP;

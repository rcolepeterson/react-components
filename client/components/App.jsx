import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Help = () => <h2>help</h2>;
const APP = () => (
    <div>
      <h1> Hello </h1>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/help" component={Help}/>
        </div>
      </Router>
    </div>
)

export default APP;

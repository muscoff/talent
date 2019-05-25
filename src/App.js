import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
//import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
              {/* <Route component={Navbar}/> */}
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;

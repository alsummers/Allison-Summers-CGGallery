import React, { Component } from 'react';
import SiteBar from './home/Navbar'
import Personal from './views/personal'
import UnderEarth from './views/underEarth'
import Header from './home/Header'
import About from './views/about'
import Tether from './views/tether'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {

  routing(){
    return (
    <Switch>
              <Route path='/' exact={true}>
              <Personal />
        </Route>
        <Route path='/underEarth' exact={true}>
          <UnderEarth/>
          </Route>
          <Route path='/tether'>
          <Tether />
          </Route>
          <Route path='/about' exact={true}>
            <About/>
            </Route>
      </Switch>
    )
  }
  render() {
    return (
      <div className="App">
      <Header />
        <Router>
          <div>
            <SiteBar/>
            {this.routing()}
            </div>
          </Router>
      </div>
    );
  }
}

export default App;

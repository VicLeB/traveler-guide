import React from 'react'
import './App.css';
import Home from './views/Home';
import Nav from './components/Nav.js'
import About from './views/About'
import TravelerExperiences from './views/TravelerExperiences';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/:id">
            <TravelerExperiences />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Reports from './Pages/Reports';
import Teams from './Pages/Teams';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Products' component={Products}/>
        <Route path='/Reports' component={Reports}/>
        <Route path='/Teams' component={Teams} />
      </Switch>
      </Router>
   </>
  );
}

export default App;

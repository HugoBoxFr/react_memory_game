import React from 'react';
import Table from "./components/Table";
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

(function(window, document){
  window.onload = init;
  
  function init(){
    const home = document.getElementById('home');
    home.style.filter = "brightness(.5)";
    }
})(window, document, undefined);


function App() {

  return (
    <div className="App" id="app">
      <div className="Bck" id="home"></div>

      <Router>
          <nav className="Nav" id="nav">
            <ul>
              <li>
                <Link to="/"><i class="fas fa-university"></i> Sanctuary</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/game/:id">
              <Table />
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

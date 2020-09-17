import React, { useState } from 'react';
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

  const [difficulty, setDifficulty] = useState(6);

  const modeChoice = (e) => {
    setDifficulty(e);
  }

  return (
    <div className="App" id="app">
      <div className="Bck" id="home"></div>

      <Router>
          <nav className="Nav" id="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/game">
              <Table mode={difficulty} />
            </Route>

            <Route path="/">
              <Home difficulty={modeChoice} />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

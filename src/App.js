import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import './App.css';
// import Nav from './components/Nav';
import Starred from './pages/Starred';
import Show from './pages/Show';
import Home from './pages/Home';

function App() {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Starred" exact>
          <Starred />
        </Route>

        <Route exact path="/Show/:id">
          <Show />
        </Route>
        <Route>
          <div>
            <h1>404</h1>
            <p>
              <strong>There isn't a Pages site here.</strong>
            </p>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

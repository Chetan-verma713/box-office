import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>Hello! This is home page.</h1>
      </Route>

      <Route path="/contact" exact>
        <h1>Hello! This is contact page.</h1>
      </Route>

      <Route>
        <h1>404 Page not found!!!</h1>
      </Route>
    </Switch>
  );
}

export default App;

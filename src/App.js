import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import './App.css';
import { ThemeProvider } from 'styled-components';
// import Nav from './components/Nav';
import Starred from './pages/Starred';
import Show from './pages/Show';
import Home from './pages/Home';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;

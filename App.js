import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/clients" component={Clients} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

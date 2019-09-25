import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Bye } from './pages/Bye';
import { Header } from './components/Header';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bye" component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

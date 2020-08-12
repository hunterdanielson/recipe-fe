import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PrivateRoute from '../auth/PrivateRoute';
import Header from '../header/Header';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import RecipesPage from '../recipes/RecipesPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={RecipesPage} />
      </Switch>
    </Router>
  );
}

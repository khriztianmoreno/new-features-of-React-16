import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

import Example1 from './examples/ErrorHandling';
import Example2 from './examples/MultipleElementsWithoutWrapping';

import './index.css';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={App}
      />
      <Route
        exact
        path="/example/1"
        component={Example1}
      />
      <Route
        exact
        path="/example/2"
        component={Example2}
      />
      <Route
        exact
        path="/example/3"
        component={Example1}
      />
      <Route
        exact
        path="/example/4"
        component={Example1}
      />
      <Route
        exact
        path="/example/5"
        component={Example1}
      />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>

);

ReactDOM.render(<Root />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

import Example1 from './examples/ErrorHandling';
import Example2 from './examples/MultipleElementsWithoutWrapping';

import './index.css';

const Root = () => (
  <BrowserRouter basename={'/new-features-of-react-16'}>
    <Switch>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={App}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/example/1`}
        component={Example1}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/example/2`}
        component={Example2}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/example/3`}
        component={Example1}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/example/4`}
        component={Example1}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/example/5`}
        component={Example1}
      />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>

);

ReactDOM.render(<Root />, document.getElementById('root'));

import React from 'react';
import { Route, Switch } from 'react-router-dom';
// HOC
import Layout from './hoc/Layout/layout';
// COMPONENTS
import Home from './components/Home/home';

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Layout>
)

export default Routes;
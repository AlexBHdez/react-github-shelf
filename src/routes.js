import React from 'react';
import { Route, Switch } from 'react-router-dom';
// HOC
import Layout from './hoc/Layout/layout';
// COMPONENTS
import Home from './components/Home/home';
import UserDetail from './components/User/UserDetail/userDetail';

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user/:username" exact component={UserDetail} />
    </Switch>
  </Layout>
)

export default Routes;
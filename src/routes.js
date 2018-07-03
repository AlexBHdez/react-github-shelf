import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// HOC
import Layout from './hoc/Layout/layout';
// COMPONENTS
import Home from './components/Home/home';
import UserDetail from './components/User/UserDetail/userDetail';

const Routes = () => (
  <Layout>
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/user/:username" component={UserDetail} />
      </Switch>
    </HashRouter>
  </Layout>
)

export default Routes;
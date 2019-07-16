import React, { Component } from 'react';
import Layout from './hoc/Layout'
import HomePage from './pages/HomePage'
import { Switch, Route } from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;



import React, { Component } from 'react';
import Layout from './hoc/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import { DinnerMenu } from './components/menu/Menus'
import { Switch, Route } from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/menu" component={MenuPage}/>
          <Route exact path="/dinner" component={DinnerMenu}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;



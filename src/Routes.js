import React, { Component } from 'react';
import Layout from './hoc/Layout'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import WhenWherePage from './pages/WhenWherePage'
import MenuPage from './pages/MenuPage'
import { DinnerMenu, DrinksMenu } from './components/menu/Menus'
import { Switch, Route } from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/when_where" component={WhenWherePage}/>
          <Route exact path="/menu" component={MenuPage}/>
          <Route exact path="/dinner" component={DinnerMenu}/>
          <Route exact path="/drinks" component={DrinksMenu}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;



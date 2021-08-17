// In App.js in a new project

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './routers';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  }
}

export default App;
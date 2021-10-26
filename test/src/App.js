import React, { Component } from 'react';
import NavBar from './components/NavBar';
import About from './views/About';
import Home from './views/Home';
import Users from './views/Users';
import Racers from './views/Racers';
import Kekambas from './views/Kekambas';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        count: 0,
      }
  }
  handleClick = (step) => {
    let newCount = this.state.count + step;
    this.setState({
        count: newCount
    })
}
  render() {
    const name = 'Jerry'
    return (
      <>
        <NavBar/>
        <Route exact path="/">
          <Home count={this.state.count} handleClick={this.handleClick}/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/users">
          <Users/>
        </Route>
        <Route exact path="/racers">
          <Racers/>
        </Route>
        <Route exact path="/kekambas">
          <Kekambas/>
        </Route>
      </>

    )
  }
}

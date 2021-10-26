import React, { Component } from 'react';
import NavBar from './components/NavBar';
import About from './views/About';
import Home from './views/Home';
import Users from './views/Users';
import Racers from './views/Racers';
import Kekambas from './views/Kekambas';
import KekambasPost from './views/KekambasPost';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        count: 0,
        name: "Jerry",
      }
  }
  handleClick = (step) => {
    let newCount = this.state.count + step;
    this.setState({
        count: newCount
    })
}
  changeName = (name) => {
    this.setState({
      name
    })
  }
  render() {
    
    return (
      <>
        <NavBar/>
        <Route exact path="/">
          <Home count={this.state.count} handleClick={this.handleClick} name = {this.state.name} changeName={this.changeName}/>
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
        <Route exact path="/kekambasPost">
          <KekambasPost/>
        </Route>
      </>

    )
  }
}

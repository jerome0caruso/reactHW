import React, { Component } from 'react';
import Button from '../components/Button';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello</h1>
                <Button step={1} incrementCount={this.props.handleClick} ></Button>
                <Button step={5} incrementCount={this.props.handleClick} ></Button>
                <Button step={10} incrementCount={this.props.handleClick} ></Button>
                <h6>Count is at {this.props.count}</h6>
          </div>
        )
    }
}

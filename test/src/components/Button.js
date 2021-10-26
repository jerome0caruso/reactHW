import React, { Component } from 'react';

export default class Button extends Component {
    // constructor(props) {
    //     super(props)
    // }

    // handleClick = () => {
    //     let newCount = this.state.count + 1;
    //     this.setState({
    //         count: newCount
    //     })
    // }
    render() {
        return (
            <div>
                <button onClick={() => this.props.incrementCount(this.props.step)}className="btn btn-primary"> + {this.props.step} </button>
               
            </div>
        )
    }
}

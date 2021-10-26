import React, { Component } from 'react';
const axios = require('axios');

export default class Kekambas extends Component {
    constructor(props){
        super(props)
        this.state = {
            kekambas: []    
        }
    }
    // Fetch------
    // componentDidMount() {
    //     fetch('https://kekambas-bs.herokuapp.com/kekambas')
    //         .then(repsonse => repsonse.json())
    //         .then (data => this.setState({
    //             kekambas: data
    //         }))
    // }

    // Axios----
    componentDidMount() {
        axios.get('https://kekambas-bs.herokuapp.com/kekambas')
        .then((response) => {
          console.log(response.data)
          this.setState({
            kekambas: response.data
            }) 
        })
        .catch(function (error) {
          console.log(error);
        })
    }


    cohort = () => {
        return this.state.kekambas.map((person, key) => <li key={key} style={{listStyle: 'none', margin: '15px'}}>{person.first_name} {person.last_name} - ID:{person.id}</li>)
    } 

    render() {

        return (
            <div>
                <h1>Kekambas72</h1>
                {this.cohort()}
            </div>
        )
    }
}


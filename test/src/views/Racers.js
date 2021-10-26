import React, { Component } from 'react'
import RacerDetail from '../components/RacerDetail'

export default class Racers extends Component {
    constructor(props){
        super(props)
        this.state={
            racers: []
        }
    }
    componentDidMount() {
        fetch('http://ergast.com/api/f1/2021/1/driverStandings.json')
            .then(repsonse => repsonse.json())
            .then (data =>  this.setState({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            }))
    }


    render() {

        return (
            <div style={{ margin: "20px" }}>
                {this.state.racers.map((r, i) => <RacerDetail key={i} racer={r}/> )}
            </div>
        )
    }
}



// rcc
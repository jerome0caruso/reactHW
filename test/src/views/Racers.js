import React, { useState, useEffect } from 'react'
import RacerForm from '../components/RacerForm';
import RacerDetail from '../components/RacerDetail'

const Racers = () => {
    const [racers, setRacers] = useState([]);
    const [season, setSeason] = useState(2021);
    const [round, setRound] = useState(1);

    useEffect(() => {
        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(repsonse => repsonse.json())
            .then (data =>  setRacers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
    })
    const handleForm = (event) => {
        event.preventDefault()
        console.log("Handling the form");
        const seasonInput = event.target.season.value;
        const roundInput = event.target.round.value;
        setSeason(seasonInput);
        setRound(roundInput);
    }

        return (
            <div className="container">
                <RacerForm handleForm={handleForm}/>
                {racers.length ? ( 
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Position</td>
                            <td>Points</td>
                            <td>Wins</td>
                            <td>First</td>
                            <td>Last</td>
                            <td>Nationality</td>
                            <td>Constructor</td>
                        </tr>
                    </thead>
                    <tbody>
                        {racers.map((r, i) => <RacerDetail key={i} racer={r}/> )}
                    </tbody>
                </table>) : null}

            </div>
        );

}
export default Racers;

// rcc


// import React, { Component } from 'react'
// import RacerDetail from '../components/RacerDetail'

// export default class Racers extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             racers: []
//         }
//     }
//     componentDidMount() {
//         fetch('http://ergast.com/api/f1/2021/1/driverStandings.json')
//             .then(repsonse => repsonse.json())
//             .then (data =>  this.setState({
//                 racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
//             }))
//     }


//     render() {

//         return (
//             <div style={{ margin: "20px" }}>
//                 {this.state.racers.map((r, i) => <RacerDetail key={i} racer={r}/> )}
//             </div>
//         )
//     }
// }



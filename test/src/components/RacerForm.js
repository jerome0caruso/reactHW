import React, { Component } from 'react'

export default class RacerForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleForm}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <input type="text" className="form-control" id="season" placeholder="Season"/>
                        </div>
                        <div className="col-12 col-sm-6">
                            <input type="text" className="form-control" id="round" placeholder="Round"/>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" className="btn btn-danger w-95"></input>
                    </div>
                </div>
            </form>
        )
    }
}

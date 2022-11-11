import React, { Component } from "react";
import Header from "../../components/header/Header";

class Pets extends Component {

    state = {
        pets: []  // initial state, but will update with data from API
    }

    // runs when component loads
    componentDidMount(){
        console.log("componentDidMount just ran")        
        this.getPets()
    }

    getPets = () => {
        // use 'fetch' library to talk to the API

        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL

        fetch(`${apiURL}/api/jobrequests`)
            .then((results) => results.json())  // ceremony
            .then((jrData) => {
                console.log(jrData)
                this.setState(
                    {
                        pets: jrData  // pets in state is now equal to jrData from API
                    }
                )

            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="Pets">

                <Header/>

                <h3 className="text-center" >View Our Pets</h3>

                {/* This is what's currently in pets in state: {JSON.stringify(this.state.pets)} */}

                {/* map over things and produce JSX */}

                <ul>
                {this.state.pets.map((jobRequest, idx) => {
                    return <li key={idx}>{jobRequest.title}</li>
                    }
                )}
                </ul>

            </div>
        )
    }

}

export default Pets;
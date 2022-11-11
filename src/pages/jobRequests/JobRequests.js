import React, { Component } from "react";
import Header from "../../components/header/Header";

class JobRequests extends Component {

    state = {
        jobRequests: []  // initial state, but will update with data from API
    }

    // runs when component loads
    componentDidMount(){
        console.log("componentDidMount just ran")        
        this.getJobRequests()
    }

    getJobRequests = () => {
        // use 'fetch' library to talk to the API

        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL

        fetch(`${apiURL}/api/jobrequests`)
            .then((results) => results.json())  // ceremony
            .then((jrData) => {
                console.log(jrData)
                this.setState(
                    {
                        jobRequests: jrData  // pets in jobRequests is now equal to jrData from API
                    }
                )

            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="JobRequests">

                <Header/>

                <h3 className="text-center" >View All Job Requests</h3>

                {/* This is what's currently in pets in state: {JSON.stringify(this.state.pets)} */}

                {/* map over things and produce JSX */}

                <ul>
                {this.state.jobRequests.map((jobRequest, idx) => {
                    return <li key={idx}>{jobRequest.title}</li>
                    }
                )}
                </ul>

            </div>
        )
    }

}

export default JobRequests;
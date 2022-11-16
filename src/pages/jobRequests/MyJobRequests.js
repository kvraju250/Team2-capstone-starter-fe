import React, { Component } from "react";
import JobRequestGridCards from "../../components/gridcards/JobRequestGridCards";
import Alert from 'react-bootstrap/Alert';
import Header from "../../components/header/Header";
import { isAuthenticated, getUserEmail } from "../../utils/authHelper";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";

class MyJobRequests extends Component {

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
        let fullApiURL = `${apiURL}/api/jobrequests/${getUserEmail()}`

        fetch(fullApiURL)
            .then((results) => results.json())  // ceremony
            .then((jrData) => {
                console.log(jrData)
                this.setState(
                    {
                        jobRequests: jrData  // jobRequests in jobRequests is now equal to jrData from API
                    }
                )

            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        const params = new URLSearchParams(this.props.location.search);
        let flashMessage = params.get('message');

        if(this.state.jobRequests.length == 0) {
            flashMessage = "We didn't find any job requests associated to you!"
        }

        return (
            <div className="MyJobRequests">

                <Header isAuthenticated={isAuthenticated()} />

                <h3 className="text-center" >My Job Requests</h3>

                {/* This is what's currently in jobRequests in state: {JSON.stringify(this.state.jobRequests)} */}

                {/* map over things and produce JSX */}

                <div className="container">
                {flashMessage && <Alert variant="info">{flashMessage}</Alert>}

                <JobRequestGridCards jobRequests={this.state.jobRequests} />
                
                </div>                

            </div>
        )
    }

}

export default mustBeAuthenticated(MyJobRequests);
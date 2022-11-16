import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';
import Header from "../../components/header/Header";
import JobRequestForm from "../../components/jobRequest/JobRequestForm";
import { generateAuthHeader, getUserEmail, isAuthenticated } from "../../utils/authHelper";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";

class UpdateJobRequest extends Component {

    userEmail = getUserEmail()

    state = {
        errorMessage: null,
        formData: {
            title: "",
            description: "",
            type: "",
            dateNeeded: "",
            status: "Open",  // keep this by default; not showing this in UI on create
            zip: "",
            email: this.userEmail
        }
    }

    //when the component mounts (displays on screen) get the job request from the API
    componentDidMount() {
        //get the job request's id from the URL to make the API call
        const jobRequestId = this.props.match.params.jobrequestid;

        console.log("jobRequestId: " + jobRequestId)

        this.getJobRequest(jobRequestId)        
    }

    getJobRequest = (jobRequestId) => {

        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL

        // //use fetch to make an API call and get a specific student (returns a promise)
        // fetch(`${apiURL}/api/users/${email}`, {
        //     headers: {
        //         ...generateAuthHeader()
        //     }
        // })
        //     //on success of the fetch request, turn the response that came back into JSON
        //     .then((response) => response.json())
        //     //on success of turnig the response into JSON (data we can work with), lets add that data to state
        //     .then((data) => {


        //         //update state with the data from the API causing the page to re-render
        //         this.setState({
        //             formData: {...this.state.formData, ...data}
        //         });
        //     })
        //     //handle any errors/failures with getting data from the API
        //     .catch((error) => {
        //         console.log(error)
        //     });
    }

    //method that handles updating the data in state that matches the data in the form
    //runs everytime a form field changes
    handleChange = (event) => {
        //create a new object from form data in state
        let formData = {...this.state.formData};

        //take what is changed in the form and update the mathcing key in the form data object
        formData[event.target.id] = event.target.value;

        //update formData in state with the new object
        this.setState({formData});
    }

    //run when the form is submitted
    handleSubmit = (event) => {

        //prevent the form from refreshing the page
        event.preventDefault();

        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL
        
        //use fetch to make a POST request with the Data from state that has been populated from
        //the data in the form
        fetch(`${apiURL}/api/jobrequests`, {
            method: "POST", //make sure whe set our method to POST when creating records
            headers: {
                'content-type': 'application/json', //make sure we set the content-type headers so the API knows it is recieveing JSON data
                ...generateAuthHeader()  // spread operator, spread the properties and add to this object here
            },
            body: JSON.stringify(this.state.formData) //send our data form state int he body of the request
        })
        .then((response) => response.json()) // on success, turn the respons into JSON so we can work with it
        .then((data) => {
            const message = "Job Request created successfully!"
            //programatically redirect to another route on success
            this.props.history.push(`/myjobrequests?message=${message}`)
        })
        .catch(e => console.log(e.message)) //console.log any errors if the previous steps fail

    }

    render() {
        // const params = new URLSearchParams(this.props.location.search);
        // const flashMessage = params.get('message');

        return (
            <div className="UpdateJobRequest">

                <Header isAuthenticated={isAuthenticated()} />

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {/* {flashMessage && <Alert variant="info">{flashMessage}</Alert>} */}
                </div>
                
                <h3 className="text-center" >Update a Job Request</h3>
                <JobRequestForm                
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />

            </div>
        )
    }
}

export default mustBeAuthenticated(UpdateJobRequest)

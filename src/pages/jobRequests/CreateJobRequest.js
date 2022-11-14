import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';
import Header from "../../components/header/Header";
import JobRequestForm from "../../components/jobRequest/JobRequestForm";
import { generateAuthHeader, getUserEmail, isAuthenticated } from "../../utils/authHelper";

class CreateJobRequest extends Component {

    userEmail = getUserEmail()

    state = {
        errorMessage: null,
        formData: {
            title: "Paint Wall",
            description: "Paint Wall desc",
            type: "Painting",
            dateNeeded: "11-30-2022",
            status: "Open",  // keep this by default; not showing this in UI on create
            zip: "90005",
            email: this.userEmail
        }
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
            this.props.history.push(`/createjobrequest?message=${message}`)
        })
        .catch(e => console.log(e.message)) //console.log any errors if the previous steps fail

    }

    render() {
        const params = new URLSearchParams(this.props.location.search);
        const flashMessage = params.get('message');

        return (
            <div className="CreateJobRequest">

                <Header isAuthenticated={isAuthenticated()} />

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {flashMessage && <Alert variant="info">{flashMessage}</Alert>}
                </div>
                
                <h3 className="text-center" >Create a Job Request</h3>
                <JobRequestForm                
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />

            </div>
        )
    }
}

export default CreateJobRequest

import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

import Header from "../../components/header/Header";

import CreateApptForm from "../../components/appointment/CreateApptForm";

class CreateAppointment extends Component {

    state = {
        errorMessage: null,
        formData: {
            jobRequestID: "",            
            assignedUserEmail: "",
            date: ""
        }
    }


    render() {
        return (
            <div className="CreateAppt">

                <Header/>

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                </div>
                
                <h3 className="text-center" >Create an Appointment</h3>
                <CreateApptForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />

            </div>
        )
    }


}

export default CreateAppointment
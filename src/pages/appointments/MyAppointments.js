import React, { Component } from "react";
import Header from "../../components/header/Header";
import Alert from 'react-bootstrap/Alert';
import { generateAuthHeader, isAuthenticated, getUserEmail } from "../../utils/authHelper";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import AppointmentGridCards from "../../components/gridcards/AppointmentGridCards";

class MyAppointments extends Component {

    state = {
        appointments: []  // initial state, but will update with data from API
    }

    // runs when component loads
    componentDidMount(){
        console.log("componentDidMount just ran")
        this.getAppointments()
    }

    getAppointments = () => {
        // use 'fetch' library to talk to the API

        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL
        let fullApiURL = `${apiURL}/api/appointments?assigneduseremail=${getUserEmail()}`

        fetch(fullApiURL, {
            headers: {                
                ...generateAuthHeader()  // spread operator, spread the properties and add to this object here
            }
        })
            .then((results) => results.json())  // ceremony
            .then((apptData) => {
                console.log(apptData)
                this.setState(
                    {
                        appointments: apptData  // appointments in appointments is now equal to apptData from API
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

        if(this.state.appointments.length == 0) {
            flashMessage = "We didn't find any appointments associated to you!"
        }

        return (
            <div className="MyAppointments">

                <Header isAuthenticated={isAuthenticated()} />

                <h3 className="text-center" >My Appointments</h3>

                {/* This is what's currently in jobRequests in state: {JSON.stringify(this.state.jobRequests)} */}

                {/* map over things and produce JSX */}

                <div className="container">
                {flashMessage && <Alert variant="info">{flashMessage}</Alert>}

                <AppointmentGridCards appointments={this.state.appointments}/>
                    {/* <ul>
                    {this.state.appointments.map((appointment, idx) => {
                        return <li key={idx}>{appointment.jobRequestData.title}: {appointment.jobRequestID} - {appointment.date}</li>


                        

                        // return <li key={idx}>{appointment.title}: {appointment.appointments_full[0].jobRequestID} - {appointment.date}</li>
                        }
                    )}
                    </ul> */}
                </div>

                

            </div>
        )
    }

}

export default mustBeAuthenticated(MyAppointments);
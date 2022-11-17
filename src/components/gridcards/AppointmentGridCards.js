import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {withRouter } from "react-router-dom";

function AppointmentGridCards(props) {
    
   
//    let handelClick = (event) => {

//     console.log(event.target.id)
//     props.history.push(`/createappointment/${event.target.id}`)

//    }

    return (
        <div className="AppointmentGridCards container mb-3">
            <Row xs={1} lg={3} className="g-4">
                {/* this array is made up - put our array here and then display it on the job request page */}
                {/* replace the underscore with what we're working on, aka job request */}
                {props.appointments.map((appointment, idx) => (
                    <Col key={idx}>
                        <Card>
                            {/* <Card.Img variant="top" src="https://via.placeholder.com/300" /> */}
                            <Card.Body>
                                <Card.Title>{appointment.jobRequestData.title}</Card.Title>
                                <Card.Text>{appointment.jobRequestData.description}</Card.Text>
                                <Card.Text><b>Type:</b> {appointment.jobRequestData.type}</Card.Text>
                                <Card.Text><b>Status:</b> {appointment.jobRequestData.status}</Card.Text>
                                <Card.Text><b>Job Requester:</b> {appointment.jobRequestData.email}</Card.Text>
                                <Card.Text><b>Date Scheduled:</b> {new Date(appointment.date).toDateString()}</Card.Text>
                                {/* <Card.Text>{jobRequest.description}</Card.Text>
                                <Card.Text>{jobRequest.type}</Card.Text>
                                <Card.Text>{jobRequest.dateNeeded}</Card.Text>
                                <Button id={jobRequest._id} variant="primary" onClick={handelClick}>HelpyourBuddy</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default withRouter(AppointmentGridCards);

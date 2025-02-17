import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {withRouter } from "react-router-dom";

function JobRequestGridCards(props) {
    
   
   let handelClick = (event) => {

    console.log(event.target.id)
    props.history.push(`/createappointment/${event.target.id}`)

   }

   let handleEditClick = (event) => {
    // console.log(event.target.id)
    props.history.push(`/updatejobrequest/${event.target.id}`)
   }

    return (
        <div className="JobRequestGridCards container mb-3">
            <Row xs={1} lg={3} className="g-4">
                {/* this array is made up - put our array here and then display it on the job request page */}
                {/* replace the underscore with what we're working on, aka job request */}
                {props.jobRequests.map((jobRequest, idx) => (
                    <Col key={idx} className='mb-4'>
                        <Card className='h-100'>
                            {/* <Card.Img variant="top" src="https://via.placeholder.com/300" /> */}
                            <Card.Body>
                                <Card.Title>{jobRequest.title}</Card.Title>
                                <Card.Text>{jobRequest.description}</Card.Text>
                                <Card.Text><b>Type:</b> {jobRequest.type}</Card.Text>
                                <Card.Text><b>Date Needed:</b> {new Date(jobRequest.dateNeeded).toDateString()}</Card.Text>
                                {props.location.pathname === "/myjobrequests" ? <Card.Text><b>Status:</b> {jobRequest.status}</Card.Text> : ""}                                
                                {props.location.pathname !== "/myjobrequests"
                                    ? <div className='text-center'><Button id={jobRequest._id} variant="primary" onClick={handelClick}>Help Your Buddy</Button></div>
                                    : "" }                               
                                {jobRequest.status === "Open" && props.location.pathname === "/myjobrequests" 
                                    ? <div className='text-center'><Button id={jobRequest._id} variant="primary" onClick={handleEditClick}>Edit</Button></div>
                                    : ""}                             
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default withRouter(JobRequestGridCards);

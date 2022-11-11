import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function JobRequestGridCards(props) {
    
    return (
        <div className="JobRequestGridCards container mb-3">
            <Row xs={1} lg={3} className="g-4">
                {/* this array is made up - put our array here and then display it on the job request page */}
                {/* replace the underscore with what we're working on, aka job request */}
                {props.jobRequests.map((jobRequest, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/300" />
                            <Card.Body>
                                <Card.Title>{jobRequest.title}</Card.Title>
                                <Card.Text>{jobRequest.description}</Card.Text>
                                <Card.Text>{jobRequest.type}</Card.Text>
                                <Card.Text>{jobRequest.dateNeeded}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default JobRequestGridCards;

//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CreateApptForm({ handleChange, handleSubmit, formData }) {

    return (
        <div className="CreateApptForm container">

            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="jobRequestId">
                    <Form.Label><strong>JobRequestID:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.jobRequestID} type="text" placeholder="Jobreqid" />
                </Form.Group> 
                <Form.Group controlId="assignedUserEmail">
                    <Form.Label><strong>AssignedUserEmail:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.assignedUserEmail} type="text" placeholder="email" />
                </Form.Group>
                <Form.Group controlId="date">
                    <Form.Label><strong>Date:</strong></Form.Label>
                                {/* <DatePicker
                                    selected={values.date}
                                    onChange={(e) => {
                                        setFieldValue('date', e);
                                        setFieldTouched('date');
                                        }}
                                    className="form-control"
                                    minDate={today}
                                   
                                /> */}
                 <Form.Control required minLength="2" onChange={handleChange} value={formData.date} type="Date" placeholder="Date" /> 
                </Form.Group>                

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default CreateApptForm

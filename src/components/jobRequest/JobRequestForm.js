//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function JobRequestForm({ handleChange, handleSubmit, formData, isUpdate }) {

    return (
        <div className="JobRequestForm container">

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label><strong>Title:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.title} type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label><strong>Description:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.description} type="text" placeholder="Description" />
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label><strong>Type:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.type} type="text" placeholder="Type" />
                </Form.Group>
                <Form.Group controlId="dateNeeded">
                    <Form.Label><strong>Date Needed:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.dateNeeded} type="datetime-local" placeholder="Date Needed" />
                </Form.Group>
                
                <Form.Group controlId="status" className='d-none'>
                    <Form.Label><strong>Status:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.status} type="text" placeholder="Status" />
                </Form.Group>
                <Form.Group controlId="zip">
                    <Form.Label><strong>Zip:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.zip} type="text" placeholder="Zip" />
                </Form.Group>
                <Form.Group controlId="email" className='d-none'>
                    <Form.Label><strong>E-mail:</strong></Form.Label>
                    <Form.Control required onChange={handleChange} value={formData.email} type="email" placeholder="Email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default JobRequestForm

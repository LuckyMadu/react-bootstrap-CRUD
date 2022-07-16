import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import makeToast from "../utils/toaster";

const ItemForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        makeToast()
    }
    return (
        <Container>
            <h2>Create Buffet</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Meal Plan Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Meal Plan Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Maximum Capacity</Form.Label>
                    <Form.Control type="number" placeholder="Enter Meal Plan Name" />
                    <Form.Text className="text-muted">
                        ex: 5
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" />
                    <Form.Text className="text-muted">
                        ex: 560.3
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Day</Form.Label>
                    <Form.Control type="text" placeholder="Day" />
                    <Form.Text className="text-muted">
                        ex: Monday
                    </Form.Text>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="text" placeholder="Day" />
                            <Form.Text className="text-muted">
                                ex: 6.00
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="text" placeholder="Day" />
                            <Form.Text className="text-muted">
                                ex: 7.00
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        SUBMIT
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default ItemForm;
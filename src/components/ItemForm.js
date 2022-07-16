import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import makeToast from "../utils/toaster";
import Loader from "./Loader";

const ItemForm = ({
    loading,
    name,
    capacity,
    price,
    day,
    start,
    end,
    setName,
    setCapacity,
    setPrice,
    setDay,
    setStart,
    setEnd,
    handleSubmit,
}) => {
    return (
        <Container>
            <h2>Create Buffet</h2>
            {loading ? <Loader loading={loading} /> : (
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Meal Plan Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Maximum Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Capacity"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                        />
                        <Form.Text className="text-muted">ex: 5</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Form.Text className="text-muted">ex: 560.3</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Day</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Day"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                        <Form.Text className="text-muted">ex: Monday</Form.Text>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Start"
                                    value={start}
                                    onChange={(e) => setStart(e.target.value)}
                                />
                                <Form.Text className="text-muted">ex: 6.00</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="End"
                                    value={end}
                                    onChange={(e) => setEnd(e.target.value)}
                                />
                                <Form.Text className="text-muted">ex: 7.00</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={handleSubmit}>
                            SUBMIT
                        </Button>
                    </div>
                </Form>
            )}
        </Container>
    );
};

export default ItemForm;

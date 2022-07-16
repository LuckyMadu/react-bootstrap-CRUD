import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

const ItemList = ({ item, deleteMeal }) => {
    return (
        <ListGroup as="ol">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.meal_plan_name}</div>
                </div>
                <Button variant="success">Update</Button> &nbsp;
                <Button variant="danger" onClick={() => deleteMeal(item._id)}>Delete</Button>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ItemList;
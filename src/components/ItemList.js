import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const ItemList = () => {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">List Number 01</div>
                </div>
                <Badge bg="primary" pill>
                    Update
                </Badge>
                <Badge bg="danger" pill>
                    Delete
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">List Number 02</div>
                </div>
                <Badge bg="primary" pill>
                    Update
                </Badge> {' '}
                <Badge bg="danger" pill>
                    Delete
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ItemList;
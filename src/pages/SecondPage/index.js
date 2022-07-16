import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import makeToast from "../../utils/toaster";
import ItemForm from "../../components/ItemForm";
import SecondItemForm from "../../components/SecondItemForm";

const SecondPage = () => {
    const [name, setName] = useState('');

    const add = (e) => {
        e.preventDefault();
        makeToast();
    };

    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <ItemForm />
                    </Col>
                    <Col>
                        <SecondItemForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SecondPage;

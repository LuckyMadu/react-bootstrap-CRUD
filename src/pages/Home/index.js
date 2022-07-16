import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import makeToast from "../../utils/toaster";
import ItemList from "../../components/ItemList";

const Home = () => {
    return (
        <Container className="mt-2">
            <Row>
                <ItemList />
            </Row>
        </Container>

    );
};

export default Home;

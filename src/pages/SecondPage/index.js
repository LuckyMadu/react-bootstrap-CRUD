import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import makeToast from "../../utils/toaster";
import ItemForm from "../../components/ItemForm";
import SecondItemForm from "../../components/SecondItemForm";


import api from "../../api";
import { API_ENDPOINTS } from '../../config'


const SecondPage = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState(null);
    const [price, setPrice] = useState(null);
    const [day, setDay] = useState('');
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await api.post(API_ENDPOINTS.CREATE_MEAL, {
            "meal_plan_name": name,
            "maximum_capacity": capacity,
            "price": price,
            "day": day,
            "start_time": start,
            "end_time": end
        });

        if (res.data.success) {
            makeToast(res.data.message);
            setName('')
            setCapacity(null)
            setPrice(null)
            setDay('')
            setStart(null)
            setEnd(null)
            setLoading(false);
        } else {
            makeToast("Failed to create buffet");
            setLoading(false);
        }
    };

    return (
        <Container>
            <Row>
                <Col >
                    <ItemForm
                        loading={loading}
                        name={name}
                        capacity={capacity}
                        price={price}
                        day={day}
                        start={start}
                        end={end}
                        setName={setName}
                        setCapacity={setCapacity}
                        setPrice={setPrice}
                        setDay={setDay}
                        setStart={setStart}
                        setEnd={setEnd}
                        handleSubmit={handleSubmit}
                    />
                </Col>
                <Col>
                    <SecondItemForm />
                </Col>
            </Row>
        </Container>
    );
};

export default SecondPage;

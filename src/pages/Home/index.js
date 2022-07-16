import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ItemList from "../../components/ItemList";
import Loader from "../../components/Loader";
import makeToast from "../../utils/toaster";

import api from "../../api";
import { API_ENDPOINTS } from '../../config'


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([])

    //Retrieve Meals
    const retrieveMeals = async () => {
        const response = await api.get(API_ENDPOINTS.GET_MEALS);
        if (response.data) {
            setMeals(response.data.data);
            setLoading(false);
        } else {
            console.log("error retrieving meals")
        }
    };

    const deleteMeal = async (id) => {
        setLoading(true)
        const response = await api.delete(`${API_ENDPOINTS.REMOVE_MEAL}${id}`);

        if (response.data.success) {
            retrieveMeals();
            setLoading(false);
            makeToast(response.data.message);
        } else {
            console.log("error deleting meals")
        }

    }

    useEffect(() => {
        retrieveMeals();
    }, [])
    return (
        <Container className="mt-2">

            {
                loading ? <Loader loading={loading} /> : (
                    <Row>
                        {meals?.map((item, index) => <ItemList item={item} key={index} deleteMeal={(id) => deleteMeal(id)} />)}
                    </Row>
                )
            }

        </Container>

    );
};

export default Home;

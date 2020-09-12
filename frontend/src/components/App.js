import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";

export const App = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [placeholder, setPlaceholder] = useState("Loading");

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get("api/lead");
            if (response.data.status > 400) {
                setPlaceholder("Something went wrong");
            }
            setData(response.data);
            setLoaded(true);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <ul>
            {data.map((contact) => {
                return (
                    <li key={contact.id}>
                        {contact.name} - {contact.email}
                    </li>
                );
            })}
        </ul>
    );
};

const container = document.getElementById("app");
render(<App />, container);

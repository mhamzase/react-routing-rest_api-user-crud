import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });
    const { id } = useParams();

    

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    };

    useEffect(() => {
        loadUser();
    }, []);

    
    return (
        <div className="container py-4">
            <Link className="btn btn-info" to="/">Back to Home</Link>
            <h1 className="display-4">User Id: <b>{id}</b></h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item"><b>Name:</b> {user.name}</li>
                <li className="list-group-item"><b>Username:</b> {user.username}</li>
                <li className="list-group-item"><b>Email:</b> {user.email}</li>
                <li className="list-group-item"><b>Phone:</b> {user.phone}</li>
                <li className="list-group-item"><b>Website:</b> {user.website}</li>
            </ul>
        </div>
    );
};

export default User;
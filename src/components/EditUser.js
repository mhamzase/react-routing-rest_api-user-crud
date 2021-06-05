import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import {useHistory,useParams} from 'react-router-dom'


function EditUser() {



    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    })

    let history = useHistory();
    let {id} = useParams();

    const {name,username,email,phone,website} = user;
    const handleUserInput = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmitForm = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        history.push("/");
    }

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const userData = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(userData.data)
    }
    return (
        <div className="col-5 m-auto shadow-lg p-5">
            <h1 className="display-4 text-center ">Update User</h1>
            <Form onSubmit={(e)=> handleSubmitForm(e)}>
                <Form.Group >
                <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="name" type="text" placeholder="Enter Name" value={name}/>
                    
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="username" type="text" placeholder="Enter Username" value={username}/>
                    
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="email" type="email" placeholder="Enter Email" value={email}/>
                    
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="phone" type="text" placeholder="Enter Phone No" value={phone}/>
                    
                    <Form.Label>Website</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="website" type="text" placeholder="Enter Website" value={website}/>
                    

                    <Button className="col-12 mt-4" variant="info" type="submit">Update</Button>

                </Form.Group>
            </Form>
        </div>
    )
}

export default EditUser

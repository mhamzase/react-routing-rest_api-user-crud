import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


function AddUser() {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    })

    let history = useHistory();


    const {name,username,email,phone,website} = user;

    const handleUserInput = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmitForm = async e =>{
        e.preventDefault();

        await axios.post("http://localhost:3001/users",user);
        history.push("/");
    }

    return (
        <div className="col-5 m-auto shadow-lg p-4">
            <h1 className="display-4 text-center ">Add User</h1>
            <Form onSubmit={(e)=> handleSubmitForm(e)}>
                <Form.Group >
                    <Form.Label>Name</Form.Label> 
                    <Form.Control onChange={(e) => handleUserInput(e)} name="name" type="text" placeholder="Enter Name" value={name}/>
                    <br/>
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="username" type="text" placeholder="Enter Username" value={username}/>
                    <br/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="email" type="email" placeholder="Enter Email" value={email}/>
                    <br/>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="phone" type="text" placeholder="Enter Phone No" value={phone}/>
                    <br/>
                    <Form.Label>Website</Form.Label>
                    <Form.Control onChange={(e) => handleUserInput(e)} name="website" type="text" placeholder="Enter Website" value={website}/>
                    

                    <Button className="col-12 mt-3" variant="primary" type="submit">Add</Button>

                </Form.Group>
            </Form>
        </div>
    )
}

export default AddUser

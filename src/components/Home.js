import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FaUserEdit, FaTrashAlt, FaEye } from "react-icons/fa";

function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const allUsers = await axios.get("http://localhost:3001/users")
        setUsers(allUsers.data.reverse())  // reverse() get users in decending order
    }

    const removeUser = async (id) =>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        fetchUsers();
    }
    return (
        <div>
            <h1 className="display-4 text-center m-5">React Users</h1>
            <Table striped bordered hover className="text-center shadow-lg col-10 m-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td style={{ fontSize: '24px' }}>

                                    <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                        <Link className="ml-3 text-success" to={`/user/${user.id}`}><FaEye /></Link>
                                    </OverlayTrigger>

                                    <OverlayTrigger overlay={<Tooltip >Edit</Tooltip>}>
                                        <Link className="ml-3 text-primary" to={`/edit-user/${user.id}`}><FaUserEdit /></Link>
                                    </OverlayTrigger>



                                    <OverlayTrigger overlay={<Tooltip >Remove</Tooltip>}>
                                        <Link className="ml-3 text-danger" onClick={() => removeUser(user.id)}><FaTrashAlt /></Link>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <h1 className="display-4 mt-5 mb-5 text-center">React Rest API's with CRUD + Routing </h1>
        </div>
    )
}

export default Home

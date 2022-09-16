import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, CardText, Button } from "reactstrap";
const url  = require('url');

const Admin = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios.get('https://calenderfx-api.onrender.com/api/users')
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        fetchUsers()
    }, [])

    const submit = (id) => {
       // const params = new url.URLSearchParams({ id: id });

        axios.delete('http://localhost:5000/api/remove', null, {params : {id}})
            .then(res => {
                console.log('triggered');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.data.details);
            })
    }

    return (
        <div>
            {/* <Header /> */}
            <div>
                {isLoading ? (
                    <h3>loading...</h3>
                ) : (
                    <div>{users.map((u, key) => {
                        return (
                            <div>
                                <Card body>
                                    <CardText>
                                        <div key={key}>
                                            <p>username: {u.username}</p>
                                            <p>email: {u.email}</p>
                                            <p>api_key: {u.api_key}</p>
                                            <p>requestes: {u.requestes}</p>
                                            <p>registerd date: {u.registerd_date}</p>
                                        </div>
                                    </CardText>
                                    <Button style={{ background: "#560027" }} onClick= {() => submit(u._id)}>Remove</Button>
                                </Card><br />
                            </div>
                        )
                    }

                    )}</div>
                )}
            </div>
        </div>

    )
}

export default Admin;
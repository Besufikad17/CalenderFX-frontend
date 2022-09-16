import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './assets/style.css';

import {
    Card,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    NavLink,
    CardBody} from 'reactstrap';
import { logout } from "../features/userSlice";
import { useSelector } from 'react-redux';
import { setErrorMsg } from "../features/errorSlice";
import { selectUser } from '../features/userSlice';
import axios from "axios";

const Profile = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [email, setEmial] = useState(user.email);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    const [isOpen, setIsOpen] = useState({
        isOp: false
    });

    const toggle = () => {
        setIsOpen({ isOp: !isOpen.isOp })
    }

    const submit = e => {
        e.preventDefault();
        dispatch(logout())
    }

    const update = e => {
        e.preventDefault();

        const update = {
            username,
            email,
            password
        }

        axios.put('https://calenderfx-api.onrender.com/api/update', update)
        .then(res => {
            console.log(res.data.user);
            dispatch(update(res.data.user))
        }).catch(err => {
            alert(err.response.data.msg);
            dispatch(setErrorMsg(err.response.data.msg))
        })

        
    }

    return (
        <div>
            <NavLink onClick={toggle} href="#" style={{ color: "white" }}>
                {user.username}
            </NavLink>

            <Modal isOpen={isOpen.isOp} toggle={toggle}>
                <ModalHeader><h5>Profile</h5></ModalHeader>
                <ModalBody>
                    <Card body className="text-center" style={{
                        background: "transparent",
                        borderStyle: "none"
                    }}>
                        <CardBody style={{ textAlign: "left" }}>
                            <nav>
                                <ul>
                                    <li>Username:</li>
                                    <li><input autoComplete="false"
                                        type="text"
                                        placeholder="username"
                                        name="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    /></li><li /><li />
                                </ul>
                            </nav><br />
                            <nav>
                                <ul>
                                    <li>Email:</li>
                                    <li>{user.email}</li> <li /><li />
                                </ul>
                            </nav><br />
                            <nav>
                                <ul>
                                    <li>Password:</li>
                                    <li><input autoComplete="false"
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    /><i onClick={togglePasswordVisibility}
                                         style ={{
                                            position: "absolute",
                                            top: "44%",
                                            right: "20%"
                                         }}
                                    >
                                            {passwordShown ? (
                                                <AiFillEye />
                                            ) : (
                                                <AiFillEyeInvisible />
                                            )
                                            }

                                        </i></li> <li /><li />
                                </ul>
                            </nav><br />
                            <nav>
                                <ul>
                                    <li>api-key:</li>
                                    <li> {user.api_key} </li> <li /><li /><li /><li />
                                </ul>
                            </nav><br />
                            <nav>
                                <ul>
                                    <li><Button style={{ background: "#560027" }} onClick={submit}>
                                        Logout
                                    </Button></li>
                                    <li><Button style={{ background: "#D37196", color: "black" }} onClick={update}>
                                        Update
                                    </Button></li><li /><li /><li /><li /><li />
                                </ul>
                            </nav>
                        </CardBody>
                    </Card>
                </ModalBody></Modal>
        </div >
    )
}

export default Profile;
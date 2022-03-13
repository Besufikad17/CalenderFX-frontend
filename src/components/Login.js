import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';

import {
    FormGroup,
    Input,
    Card,
    CardText,
    InputGroup,
    Button,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
    NavLink
} from 'reactstrap';
import { login } from "../features/userSlice";
import { setErrorMsg } from "../features/errorSlice";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMSG] = useState("");
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState({
        isOp: false
    });

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    }


    const toggle = () => {
        setIsOpen({ isOp: !isOpen.isOp })
    }

    const submit = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/auth', { username, password })
            .then(res => {
                dispatch(login(res.data.user))
                toggle();
            }).catch(err => {
                alert(err.response.data.msg);
                dispatch(setErrorMsg(err.response.data.msg))
            })
    }

    return (
        <div>
            <NavLink onClick={toggle} href="#" style={{ color: "white" }}>
                Login
            </NavLink>

            <Modal isOpen={isOpen.isOp} toggle={toggle}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <Card body className="text-center" style={{
                        background: "transparent",
                        borderStyle: "none"
                    }}>
                        <CardText>
                            {msg ? (
                                <Alert color="danger">{msg}</Alert>) : (null)}

                            <FormGroup>
                                <Input autoComplete="false"
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                /><br />
                                <Input autoComplete="false"
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                /><i onClick={togglePasswordVisibility}
                                     style= {{ 
                                         position: "absolute",
                                         top: "32%",
                                         right: "8%"
                                     }}
                                >
                                    {passwordShown ? (
                                        <AiFillEye />
                                    ) : (
                                        <AiFillEyeInvisible />
                                    )
                                    }

                                </i>
                                <br />
                                <InputGroup>
                                    <input type="checkbox" id="remember-me" />
                                    <label for="remember-me"> Remember me</label>
                                </InputGroup><br />
                                <Button style={{ background: "#560027" }} onClick={submit}>
                                    Login
                                </Button>
                                <p><Link to="/forgot">Forgot password ?</Link></p>
                            </FormGroup>
                        </CardText>
                    </Card>
                </ModalBody>
            </Modal>
        </div >
    )

}

export default Login;
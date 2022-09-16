import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import {
    FormGroup,
    Input,
    Card,
    CardText,
    InputGroup,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown,
    DropdownToggle,
    Button,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
    NavLink
} from 'reactstrap';
import { register } from "../features/userSlice";
import { getError, setErrorMsg } from "../features/errorSlice";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [purpose, setPurpose] = useState("");
    const [isOpen, setIsOpen] = useState({
        isModalOpen: false,
        isDropDownOpen: false
    });

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    const msg = useSelector(getError);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setIsOpen({
            isModalOpen: !isOpen.isModalOpen,
            isDropDownOpen: isOpen.isDropDownOpen
        })
    }

    const toggleDropDown = () => {
        setIsOpen({
            ...isOpen,
            isDropDownOpen: !isOpen.isDropDownOpen
        })

    }

    const choose = (text) => {
        setPurpose(text)
    }

    const submit = e => {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password,
            purpose,
            isRegisterd: true
        };
        console.log(newUser);

        axios.post('https://calenderfx-api.onrender.com/api/signup', newUser)
            .then(res => {
                dispatch(register(res.data.user))
                toggleModal();
            }).catch(err => {
                alert(err.response.data.msg);
                dispatch(setErrorMsg(err.response.data.msg))
            })
    }

    return (
        <div>
            <NavLink href="#" onClick={toggleModal} style={{ color: "white" }}>
                Register
            </NavLink>

            <Modal isOpen={isOpen.isModalOpen} toggle={toggleModal}>
                <ModalHeader>Register</ModalHeader>
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
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                /><br />
                                <Input autoComplete="false"
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i onClick={togglePasswordVisibility}
                                     style= {{ 
                                         position: "absolute",
                                         top: "37%",
                                         right: "7%"
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
                                    <Input autoComplete="false" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                                    <ButtonDropdown
                                        isOpen={isOpen.isDropDownOpen}
                                        toggle={toggleDropDown}
                                    >
                                        <DropdownToggle caret>
                                            Purpose
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem
                                                onClick={() => { choose('For personal project') }}
                                            >
                                                For personal project
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() => { choose('For business') }}
                                            >
                                                For business
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </InputGroup><br />
                                <InputGroup>
                                    <input type="checkbox" id="remember-me" />
                                    <label for="remember-me"> Accept <a href={"/"} style={{ textDecoration: "none" }}>Terms and Policies</a> </label>
                                </InputGroup><br />
                                <Button style={{ background: "#560027" }} onClick={submit}>
                                    Register
                                </Button>
                            </FormGroup>
                        </CardText>
                    </Card>
                </ModalBody>
            </Modal>
        </div >
    )

}


export default Register;
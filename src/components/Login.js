import React, { Component } from "react";
import { useDispatch } from "react-redux";

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


class Login extends Component {

    state = {
        isOpen: false,
        username: null,
        password: null,
        msg: null,
    }

    componentDidUpdate(prevProps) {
        
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    choose = (text) => {
        this.setState({
            purpose: text
        })
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submit = e => {
        e.preventDefault();

        const dispatch = useDispatch();

        const newUser = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(newUser);
        dispatch(login({
            username: this.state.username,
            password: this.state.password,
            loggedIn: true,
        }))
        
        this.toggle();
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#" style={{color: "white"}}>
                    Login
                </NavLink>

                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <Card body className="text-center" style={{
                            background: "transparent",
                            borderStyle: "none"
                        }}>
                            <CardText>
                                {this.state.msg ? (
                                    <Alert color="danger">{this.state.msg}</Alert>) : (null)}

                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="username"
                                        name="username"
                                        onChange={this.onChange}
                                    /><br />
                                    <Input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                        onChange={this.onChange}
                                    /><br />
                                    <InputGroup>
                                        <input type="checkbox" id="remember-me" />
                                        <label for="remember-me"> Remember me</label>
                                    </InputGroup><br />
                                    <Button style={{ background: "#560027" }} onClick={this.submit}>
                                        Login
                                    </Button>
                                </FormGroup>
                            </CardText>
                        </Card>
                    </ModalBody>
                </Modal>
            </div >
        )
    }

}

export default Login;
import React, { Component } from "react";

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


class Register extends Component {

    state = {
        isOpen: false,
        username: null,
        email: null,
        password: null,
        purpose: null,
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
        this.setState({ [e.target.name] : e.target.value});
    }

    submit = e => {
        e.preventDefault();
        
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            purpose: this.state.purpose
        };
        console.log(newUser);
        this.toggle();
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#" style={{color: "white"}}>
                    Register
                </NavLink>

                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader>Register</ModalHeader>
                    <ModalBody>
                <Card body className="text-center" style={{
                    background: "transparent",
                    borderStyle: "none"
                }}>
                    <CardText>
                        { this.state.msg ? (
                        <Alert color="danger">{this.state.msg}</Alert>) : (null)}

                        <FormGroup>
                            <Input
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={this.onChange}
                            /><br />
                            <Input
                                type="email"
                                placeholder="email"
                                name="email"
                                onChange={this.onChange}
                            /><br />
                            <Input
                                type="password"
                                placeholder="password"
                                name="password"
                                onChange={this.onChange}
                            /><br />
                            <InputGroup>
                                <Input value={this.state.purpose}  onChange={this.onChange}/>
                                <ButtonDropdown
                                    isOpen={this.state.isOpen}
                                    toggle={this.toggle}
                                >
                                    <DropdownToggle caret>
                                        Purpose
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem
                                            onClick={() => { this.choose('For personal project') }}
                                        >
                                            For personal project
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={() => { this.choose('For business') }}
                                        >
                                            For business
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </InputGroup><br />
                            <InputGroup>
                                <input type="checkbox" id="remember-me" />
                                <label for="remember-me"> Accept <a href="#" style={{ textDecoration: "none" }}>Terms and Policies</a> </label>
                            </InputGroup><br />
                            <Button style={{ background: "#560027" }} onClick={this.submit}>
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

}


export default Register;
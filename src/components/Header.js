import React, { Component, Fragment } from 'react';
import Login from './Login';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logout } from './Logout';
import Profile from './Profile';
import Register from './Register';


import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    Collapse,
    NavLink,
    NavbarToggler,
    NavbarText,
    Button,
} from 'reactstrap';


class Header extends Component {

    state = {
        isDropdownOpen: false,
        isModalOpen: false
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState({
            isDropdownOpen: !this.state.isOpen,
            isModalOpen: this.state.isModalOpen
        })
    };

    openModal = (e) => {
        e.preventDefault();
        this.setState({
            isDropdownOpen: this.state.isOpen,
            isModalOpen: !this.state.isModalOpen
        })
    };


    render() {
        const { isAuthenticated, user } = [true, {}];

        const authLinks = (
            < Fragment ><NavbarText>< Logout /></NavbarText></Fragment >, 
            < Fragment ><NavbarText>< Profile/></NavbarText></Fragment >
        )

        const guestLinks = [
            < Fragment ><NavbarText>< Login /></NavbarText></Fragment >, 
            < Fragment ><NavbarText>< Register/></NavbarText></Fragment >
        ]

        return (
            <div>
                <Navbar
                    color="faded"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                        CalenderFx
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isDropdownOpen} navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/docs">
                                    Docs
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#sec">
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                       {isAuthenticated ? (
                           <NavbarText>{authLinks}</NavbarText>
                       ): (
                            <NavbarText>{guestLinks}</NavbarText>
                       )}
                    </Collapse>

                </Navbar>
            </div >
        )
    }
}


export default Header;
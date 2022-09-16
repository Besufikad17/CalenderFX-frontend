import React, { Fragment, useState } from 'react';
import Login from './Login';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import Register from './Register';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    Collapse,
    NavLink,
    NavbarToggler,
    NavbarText,
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const Header = () => {

    const [componentProperties, setComponentProperties] = useState({
        isDropdownOpen: false,
        isModalOpen: false
    })

    const toggle = (e) => {
        e.preventDefault();
        setComponentProperties({
            isDropdownOpen: !componentProperties.isDropdownOpen,
            isModalOpen: componentProperties.isModalOpen
        })
    };


    const user = useSelector(selectUser);
    let isAdmin = false

    if (user) {
        console.log(user);
        isAdmin = user.role === "member" ? false : true;
    }

    const authLinks = (
        < Fragment ><NavbarText>< Profile /></NavbarText></Fragment >
    )

    const adminLink = (< Fragment><NavbarText><Link to="/users" style={{ textDecoration: "none" }}>Users</Link></NavbarText></Fragment>)

    const guestLinks = [
        < Fragment ><NavbarText>< Login /></NavbarText></Fragment >,
        < Fragment ><NavbarText>< Register /></NavbarText></Fragment >
    ]

    return (
        <div>
            <Navbar
                color="faded"
                expand="md"
                light
            >
                <NavbarBrand href="/" style={{"color":"white"}}>
                    CalenderFx
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={componentProperties.isDropdownOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="https://besufikad17.github.io/CalenderFx-docs/" style={{"color":"white"}}>
                                Docs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#sec" style={{"color":"white"}}>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>

                    {user ? (
                        isAdmin ? (
                            <div style={{display: "flex"}}>
                                <NavbarText>{adminLink}</NavbarText>
                                <NavbarText>{authLinks}</NavbarText>
                            </div>

                        ) : (
                            <NavbarText>{authLinks}</NavbarText>
                        )
                    ) : (
                        <NavbarText>{guestLinks}</NavbarText>
                    )}

                </Collapse></Navbar>
        </div>
    )
}


export default Header;

import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';

export class Logout extends Component {


    render(){
        return(
            <Fragment>
                <NavLink onClick={(e) => {console.log('trigerred');}} href="#" style={{color: "white"}}>
                    Logout
                </NavLink>
            </Fragment>
        )
    }
}

export default Logout;
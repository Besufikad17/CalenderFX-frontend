import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import classnames from "classnames";
import { Modal, ModalBody, ModalHeader, TabPane, Nav, NavLink, NavItem, TabContent } from 'reactstrap';

const Popup = (props) => {
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader
                close={<button className="close" onClick={props.toggle}>×</button>}
                toggle={function () { console.log('tabb'); }}
            >
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active:
                                    currentActiveTab === '1'
                            })}
                            onClick={() => { toggle('1'); }}
                        >
                            Login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active:
                                    currentActiveTab === '2'
                            })}
                            onClick={() => { toggle('2'); }}
                        >
                            Register
                        </NavLink>
                    </NavItem>
                </Nav>
            </ModalHeader>
            <ModalBody>
                <TabContent activeTab={currentActiveTab}>
                    <TabPane tabId="1">
                        <Login/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Register />
                    </TabPane>
                </TabContent>
            </ModalBody>
        </Modal>
    )
}

export default Popup;

import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import { useMediaQuery } from './hooks';
import Endpoints from './Endpoints';

import {
    Card,
    CardText
} from 'reactstrap';



const Home = () => {
    const mediaMatch = useMediaQuery('(max-width: 1200px)');
    
    return (
        <div>
            <Header/>
            <Card body className="text-center" style={{
                background: "transparent",
                borderStyle: "none"
            }}>
                <CardText>
                    <br /><br /><br />
                    <p style={{ color: "#ffffff" }}>web based application that provide services related to</p> <p style={{ color: "#ffffff" }}>Ethiopian Calender
                        system in the form of web page and outsourced API using npm package called
                        abushakir.</p>
                </CardText>
            </Card>

            <div id="sec2">
                <Card className="text-center" style={{
                    background: "rgba( 255, 255, 255, 0.2 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 5.5px )",
                    borderRadius: "10px",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    margin: mediaMatch ? "auto" : "0px 160px 0px 160px"
                }}>
                    <CardText>
                        <br /><br />
                        <h2 style={{ color: "#ffffff" }}>Demo</h2>
                    </CardText>

                    <Card body className="text-center" style={{
                        background: "transparent",
                        borderStyle: "none",
                        margin: mediaMatch ? "auto" : "0px 20px 0px 20px"
                    }}>
                        <Endpoints/>        
                    </Card>

                    <Card body className="text-center" style={{
                        background: "transparent",
                        borderStyle: "none",
                        margin: mediaMatch ? "auto" : "0px 20px 0px 20px"
                    }}>
                        <br/>   
                    </Card>
                </Card>

            </div>
            <Card body className="text-center" style={{
                background: "transparent",
                borderStyle: "none",
                margin: mediaMatch ? "auto" : "0px 320px 0px 320px"
            }}>
                <CardText>
                    <br /><br />
                    <h2 style={{ color: "#ffffff" }}>Contact Us</h2>
                </CardText>
                <Contact />
            </Card>

            <Footer />

        </div>
    )
}

export default Home;
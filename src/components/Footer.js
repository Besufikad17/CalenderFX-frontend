import React from 'react';
import { FaTelegram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">
                    <h3><span>CalenderFx</span></h3>

                    <p><br/>
                        <a className="footer-links" href="#sec2">Services</a>
                        | 
                       <a className="footer-links" href="#sec">Contact</a>
                    </p>

                    <p className="footer-company-name">© 2021 CalenderFx.</p>
                </div>

                <div className="footer-center">
                    <div>
                        <p><span>Addis Ababa, Ethiopia</span></p>
                    </div>
                    <div>
                        <p>+251</p>
                    </div>
                    <div>
                        <p><a href="#">support@calenderfx.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About</span>
                        web based application that provide services related to Ethiopian Calender
                        system in the form of web page and outsourced API using npm package called
                        abushakir.
                    </p>
                    <i className="footer-icons"><a href="https://t.me/CSEC_ASTU"><FaTelegram /></a></i>
                    <i className="footer-icons"><a href="https://ift.tt/2PEWePp"><FaLinkedinIn /></a></i>
                    <i className="footer-icons"><a href="https://ift.tt/2PEWePp"><FaGithub /></a></i>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
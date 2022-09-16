import React, { useState } from "react";
import './assets/style.css';
import { FormGroup, Input, Button } from 'reactstrap';
import axios from "axios";
import { useDispatch } from "react-redux";
import { changePassword } from "../features/userSlice";
import { setErrorMsg } from "../features/errorSlice";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(true);
    const [newPassword, setNewPassword] = useState("");
    const [comfirmedPassword, setComfirmedPassword] = useState("");
    const [key, setKey] = useState("");
    const [userKey, setUserKey] = useState("");
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const request = (e) => {
        e.preventDefault();

        const update = {
            email,
            newPassword,
            comfirmedPassword
        }

        axios.put('https://calenderfx-api.onrender.com/api/change_password', update)
            .then(res => {
                console.log(res.data.user);
                setKey(res.data.user.key);
                setUserData(res.data.user);
                setStatus(!status);
            }).catch(err => {
                alert(err.response.data.msg);
                dispatch(setErrorMsg(err.response.data.msg))
            })
        
    }

    const submit = (e) => {
        e.preventDefault();

        if(key === userKey){
            dispatch(changePassword(userData))
            navigate("/");
        }else{
            alert("Invalid verification code!!")
        }
    }

    return (
        <div>
            {
                status ? (
                    <div className="container" style={{
                        margin: "auto"
                    }} >
                        <div className="header" style={{ color: "white" }}>Forgot password</div>
                        <div className="body">
                            <div className="form">
                                <FormGroup>
                                    <div className="form-group">
                                        <Input
                                            type="email"
                                            placeholder="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div><br />
                                    <div className="form-group">
                                        <Input 
                                            autoComplete="false"
                                            type="password"
                                            placeholder="new password"
                                            name="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div><br />
                                    <div className="form-group">
                                        <Input 
                                            autoComplete="false"
                                            type="password"
                                            placeholder="comfirm password"
                                            name="password"
                                            value={comfirmedPassword}
                                            onChange={(e) => setComfirmedPassword(e.target.value)}
                                        />
                                    </div>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="footer">
                            <Button style={{ background: "#560027" }} onClick={request}>
                                Request
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="container" style={{
                        margin: "auto"
                    }} >
                        <div className="header" style={{ color: "white" }}>Forgot password</div>
                        <div className="body">
                            <div className="form">
                                <FormGroup>
                                    <div className="form-group">
                                        <Input
                                            type="text"
                                            placeholder="4-digit key"
                                            value={userKey}
                                            onChange={e => setUserKey(e.target.value)}
                                        />
                                    </div>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="footer">
                            <Button style={{ background: "#560027" }} onClick={submit}>
                                Submit
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ForgotPassword;
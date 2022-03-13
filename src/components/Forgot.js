import React, {useState} from "react";

import {Card, CardText, FormGroup,Input,Button} from 'reactstrap';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState(true);

    const submit = () => {
        setStatus(!status)
    }

    return(
        <div>
          {status ? (
            <Card body className="text-center" style={{
                background: "transparent",
                borderStyle: "none"
            }}>
                <CardText>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="username"
                        /><br />
                         <Button style={{ background: "#560027" }} onClick={submit}>
                                Request
                         </Button>
                    </FormGroup>
                </CardText>
            </Card>    
          ) : (
            <Card body className="text-center" style={{
                background: "transparent",
                borderStyle: "none"
            }}>
                <CardText>
                    <FormGroup>
                        <Input
                            type="password"
                            placeholder="new password"
                        /><br />
                        <Input
                            type="password"
                            placeholder="confirm password"
                        /><br />
                         <Button style={{ background: "#560027" }}>
                                Submit
                         </Button>
                    </FormGroup>
                </CardText>
            </Card>  
          )}
        </div>
    )
}

export default ForgotPassword;
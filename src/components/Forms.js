import React from 'react';

import {
    Card,
    CardText,
    FormGroup,
    Button,
    Input
} from 'reactstrap';


const Form = () => {
    return (
        <div>
            <Card body className="text-center" style={{
                background: "transparent",
                borderStyle: "none"
            }}>
                <CardText>
                    <h5 style={{ color: "#ffffff" }}>Number convertor</h5><br/>
                    <FormGroup>
                        <Input
                           placeholder="number"
                        /><br/>
                        <Button style={{ background: "#560027" }}>
                            Convert
                        </Button>
                    </FormGroup>
                </CardText>

                <CardText>
                    <h5 style={{ color: "#ffffff" }}>Calender convertor</h5><br/>
                    <FormGroup>
                        <Input
                            id="exampleDate"
                            name="date"
                            placeholder="date placeholder"
                            type="date"
                        /><br/>
                        <Button style={{ background: "#560027" }}>
                            Convert
                        </Button>
                    </FormGroup>
                </CardText>
            </Card>
        </div>
    )
}

export default Form;
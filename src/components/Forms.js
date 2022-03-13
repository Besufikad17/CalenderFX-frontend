import React,{ useState } from 'react';
import axios from 'axios';

import {
    Card,
    CardText,
    FormGroup,
    Button,
    Input
} from 'reactstrap';


const Form = () => {

    const [number, setNumber] = useState({
        number: 1
    });
    const [date, setDate] = useState("");

    const convertDate = (e) => {

    }

    const convertNumber = (e) => {
        e.preventDefault()

        console.log(number);
        axios.get('http://localhost:5000/api/to_geez?api_key=b2048b2058d8a984', number)
        .then(res => {
            console.log(res.body);
        }).catch(err => {
            console.log(err);
        })

    }

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
                           type="number"
                           value = {number.number}
                           onChange={e => setNumber({number: parseInt(e.target.value)})}
                        /><br/>
                        <Button style={{ background: "#560027" }} onClick={convertNumber}>
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
                        <Button style={{ background: "#560027" }} onClick={convertDate}>
                            Convert
                        </Button>
                    </FormGroup>
                </CardText>
            </Card>
        </div>
    )
}

export default Form;
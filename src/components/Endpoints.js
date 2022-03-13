import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

import {
    Card,
    ButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Form,
    FormGroup,
} from 'reactstrap';

import { useMediaQuery } from './hooks';
import axios from 'axios';

const Endpoints = () => {
    const mediaMatch = useMediaQuery('(max-width: 1200px)');

    const choose = (type) => {
        setButtonText(type)
        let url = 'http://localhost:5000/api' + type + '?api_key=08e08696620b4149';
        axios.get(url)
            .then(res => {
                setResponse(JSON.stringify(res.data))
            }).catch(err => {
                console.log(err);
            })
        // if (type === "/toEC" || type === "/to_geez") {

        // } else {
           
        // }
    }

    // const handleKeyDown = (event) => {
    //     if(event.key === 'Enter'){
    //         post()
    //     }
    // }

    // const post = () => {
    //     let url = 'http://localhost:5000/api' + buttonText + '?api_key=08e08696620b4149';
    //     console.log(code);
    //     if(buttonText === "toEC"){
    //         axios.post(url, code)
    //         .then(res => {
    //             console.log(res);
    //             setCode(JSON.stringify(res.data))
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }else{
    //         axios.get(url, code)
    //         .then(res => {
    //             console.log(res);
    //             setCode(JSON.stringify(res.data))
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }
    // }

    let lists = [
        <DropdownItem onClick={e => choose("/previous_year")}>/previous_year</DropdownItem>,
        <DropdownItem onClick={e => choose("/current")}>/current</DropdownItem>,
        <DropdownItem onClick={e => choose("/holidays")}>/holidays</DropdownItem>,
        <DropdownItem onClick={e => choose("/previous_month")}>/previous_month</DropdownItem>
    ]

    const [code, setCode] = useState("");
    const [response, setResponse] = useState("ማርቆስ");
    const [isOpen, setIsOpen] = useState({
        isOp: false
    });

    const [buttonText, setButtonText] = useState("/evange");

    const toggle = () => {
        setIsOpen({ isOp: !isOpen.isOp })
    }

    return (
        <Card className="text-center"
            style={{
                background: "transparent",
                borderStyle: "none",
                margin: mediaMatch ? "auto" : "0px 280px 0px 280px"
            }}
        >
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0" row>
                    <ButtonDropdown isOpen={isOpen.isOp} toggle={toggle}>
                        <DropdownToggle caret>
                            {buttonText}
                        </DropdownToggle>
                        <DropdownMenu>
                            {lists}
                        </DropdownMenu>
                    </ButtonDropdown>
                </FormGroup>
            </Form>

            {/* {buttonText === "/toEC" || buttonText === "/to_geez" ? (
                <CodeEditor
                    value={code}
                    language="js"
                    onChange={(evn) => setCode(evn.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="request body"
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            ) : (
                
            )} */}

<textarea
                    value={response}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }} name="name" readOnly rows="5" cols="8" placeholder=" response"></textarea>

        </Card>
    )
}

export default Endpoints;
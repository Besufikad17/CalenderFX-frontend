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
    Button
} from 'reactstrap';

import { useMediaQuery } from './hooks';
import axios from 'axios';

const Endpoints = () => {
    const mediaMatch = useMediaQuery('(max-width: 1200px)');

    const choose = () => {
        let url = 'https://calenderfx-api.onrender.com/api' + buttonText + '?api_key=08e08696620b4149';
        axios.get(url)
            .then(res => {
                setResponse(JSON.stringify(res.data))
            }).catch(err => {
                console.log(err);
            })
        setResponse("")
    }


    let lists = [
        <DropdownItem onClick={e => setButtonText("/previous_year")}>/previous_year</DropdownItem>,
        <DropdownItem onClick={e => setButtonText("/current")}>/current</DropdownItem>,
        <DropdownItem onClick={e => setButtonText("/holidays")}>/holidays</DropdownItem>,
        <DropdownItem onClick={e => setButtonText("/next_month")}>/next_month</DropdownItem>,
        <DropdownItem onClick={e => setButtonText("/previous_month")}>/previous_month</DropdownItem>
    ]

    const [code, setCode] = useState("");
    const [response, setResponse] = useState("");
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


            {buttonText === "/to_geez" ? (
                <CodeEditor
                    value={code}
                    language="json"
                    onChange={(evn) => setCode(evn.target.value)}
                    placeholder="request body"
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            ) : (
                <textarea
                    value={response}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }} name="name" readOnly rows="5" cols="8" placeholder=" response"></textarea>
            )}

            <Button style={{ background: "#560027" }} onClick={choose}>
                Send
            </Button>

        </Card>
    )
}

export default Endpoints;
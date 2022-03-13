import React, { useRef, useState } from "react";
import { Card, CardText, Button, Alert } from 'reactstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [visible, setVisible] = useState(true);
    const [err, setErr] = useState("");
    const form = useRef();

    const onDismiss = () => setVisible(false);

    const submit = (e) => {
        e.preventDefault();

        if (!name || !subject || !email || !details) {
            setErr("Please enter all fields!!")
        } else {
            const newMsg = {
                name,
                subject,
                email,
                details
            }

            console.log(newMsg);

            emailjs.sendForm('service_ici5f4q', 'template_z3c8lml', e.target, 'user_w9vFYqDwIfRUN4atsukOV')
                .then(result => {
                    console.log(result.text);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div id="sec">
            <Card body className="text-center" style={{
                background: "transparent",
                borderStyle: "none"
            }}>
                <CardText>
                    <form id="contact-form" name="contact-form" ref={form} onSubmit={submit}>


                        <div class="row">


                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />

                                </div>
                            </div>



                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />

                                </div>
                            </div>


                        </div>



                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />

                                </div>
                            </div>
                        </div>


                        <div class="row">


                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Your message" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>

                                </div>

                            </div>
                        </div><br />

                        <Button style={{ background: "#560027" }}>
                            Submit
                        </Button>

                    </form>

                    <div class="status">
                        {err ? (
                            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                                {err}
                            </Alert>
                        ) : null}
                    </div>
                </CardText>
            </Card>
        </div>
    )
}

export default Contact;
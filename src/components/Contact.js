import React from "react";
import { Card, CardText, Button } from 'reactstrap';

const Contact = () => {
    return (
        <div id="sec">
            <Card body className="text-center" style={{
                background: "transparent",
                borderStyle: "none"
            }}>
                <CardText>
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                        <div class="row">


                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control" placeholder="Your name" />

                                </div>
                            </div>



                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control" placeholder="Your email" />

                                </div>
                            </div>


                        </div>



                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" />

                                </div>
                            </div>
                        </div>


                        <div class="row">


                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Your message"></textarea>

                                </div>

                            </div>
                        </div><br/>

                        <Button style={{ background: "#560027" }}>
                            Submit
                        </Button>
                        
                    </form>

                    <div class="status"></div>
                </CardText>
            </Card>
        </div>
    )
}

export default Contact;
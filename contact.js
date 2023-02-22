import React from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';

function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1c5aaav', 'template_66b5neo', form.current, '_qm4VcLJwrEc5dYyL')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            {/* <!--Section: Contact v.2--> */}
            <section className="mb-4 contact-sec">

                {/* <!--Section heading--> */}
                <h2 className="h1-responsive font-weight-bold text-center my-4 cntct-txt">Contact us</h2>
                {/* <!--Section description--> */}
                <p className="text-center w-responsive mx-auto mb-5 txt-02">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST" ref={form} onSubmit={sendEmail}>

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" />
                                        <label for="name" className="input-1">Your name</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" />
                                        <label for="email" className="input-1">Your email</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label for="subject" className="input-1">Subject</label>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea input-1"></textarea>
                                        <label for="message" className='input-1'>Your message</label>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Grid row--> */}
                            <span>{done && "Thanks for Contacting Me"}</span>
                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn contact-btn" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-3 text-centerv contact-text">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Lahore, Pakistan</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+92 349 7457082</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>najafayina@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                </div>

            </section>
            {/* <!--Section: Contact v.2--> */}
        </div>
    )
}

export default Contact;

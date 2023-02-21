import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="container-fluid content">
            <h2 clasName="sectionheading" id="contact">Contact</h2>
            <p> Please feel free to get in touch</p>
            <div class="row">

    

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <div className="col-4">
                        <a href="mailto:rickybryans0@gmail.com"><img src={process.env.PUBLIC_URL + "./assets/email.png"} alt="Email"></img></a>
                    </div>
                </div>

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <div className="col-4">
                        <a href="https://github.com//uklivewire/"><img src={process.env.PUBLIC_URL + "./assets/github.png"} alt="Github"></img></a>
                    </div>
                </div>

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <div className="col-4">
                        <a href="https://www.linkedin.com/in/ricky-bryans-08ba24264/"><img src={process.env.PUBLIC_URL + "./assets/linkedin.png"} alt="Linkedin"></img></a>
                    </div>
                </div>
            </div>
            </div>
            );
}

export default Contact;
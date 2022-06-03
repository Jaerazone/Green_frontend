import React from "react";
// import { IconName } from "react-icons/fa";
// import {
//     FaFacebookF,
//     FaTwitterSquare,
//     FaGoogle,
//     FaInstagram,
//     FaLinkedin,
//     FaGithub,
// } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="main-footer">
            <footer className="bg-dark text-center text-white">
                {/* <!-- Grid container --> */}
                <div className="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            {/* <IconName icon={FaFacebookF} /> */}
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            {/* <IconName icon={FaTwitterSquare} /> */}
                        </a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            {/* <IconName icon={FaGoogle} /> */}
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            {/* <IconName icon={FaInstagram} /> */}
                        </a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            {/* <IconName icon={FaLinkedin} /> */}
                        </a>

                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            {/* <IconName icon={FaGithub} /> */}
                        </a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2020 Copyright:
                    <a className="text-white" href="https://jaera.com/">
                        jaera.com
                    </a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    );
};

export default Footer;

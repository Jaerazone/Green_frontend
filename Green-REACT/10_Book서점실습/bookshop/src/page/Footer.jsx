import React from "react";
import {
    BsFacebook,
    BsTwitter,
    BsGoogle,
    BsInstagram,
    BsLinkedin,
    BsGithub,
} from "react-icons/bs";

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
                            <BsFacebook />
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <BsTwitter />
                        </a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <BsGoogle />
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <BsInstagram />
                        </a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <BsLinkedin />
                        </a>

                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <BsGithub />
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

import React from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

const Layout = () => {
    return (
        <div>
            <>
                <Navbar bg="primary" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown
                                    title="Link"
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item href="#action3">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    Search
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="main-footer">
                    <footer class="bg-dark text-center text-white">
                        <div class="container p-4 pb-0">
                            <section class="mb-4">
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-facebook-f"></i>
                                </a>

                                {/* <!-- Twitter --> */}
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-twitter"></i>
                                </a>

                                {/* <!-- Google --> */}
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-google"></i>
                                </a>

                                {/* <!-- Instagram --> */}
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>

                                {/* <!-- Linkedin --> */}
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-linkedin-in"></i>
                                </a>

                                {/* <!-- Github --> */}
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-github"></i>
                                </a>
                            </section>
                        </div>
                        {/* <!-- Copyright --> */}
                        <div
                            class="text-center p-3"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                        >
                            © 2020 Copyright:
                            <a
                                class="text-white"
                                href="https://mdbootstrap.com/"
                            >
                                MDBootstrap.com
                            </a>
                        </div>
                        {/* <!-- Copyright --> */}
                    </footer>
                </div>
            </>
        </div>
    );
};

export default Layout;

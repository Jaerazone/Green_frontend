import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            BBO-DOG
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/detail/0");
                                }}
                            >
                                Detail
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/cart");
                                }}
                            >
                                Cart
                            </Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                ``
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;

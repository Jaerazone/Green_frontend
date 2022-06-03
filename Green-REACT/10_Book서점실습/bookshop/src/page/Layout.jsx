import React, { useContext } from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const Layout = () => {
    const navigate = useNavigate();
    const data = useContext(DataContext);

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="py-4" expand="lg">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate("/")}>
                        Book Store
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
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
                        {
                            //JSX 문법 사용
                            data.state.user ? (
                                // 로그인했을때 보이는 화면
                                <Nav>
                                    <NavLink className="nav-link" to="/mypage">
                                        {data.state.user}의 MyPage
                                    </NavLink>
                                    <Button
                                        onClick={() => {
                                            data.action.setUser(null);
                                            navigate("/");
                                        }}
                                        className="mx-3"
                                        variant="light"
                                    >
                                        logout
                                    </Button>
                                </Nav>
                            ) : (
                                // 로그아웃일때 보이는 화면
                                <Nav>
                                    <NavLink
                                        className="nav-link"
                                        to="/loginform"
                                    >
                                        login
                                    </NavLink>
                                </Nav>
                            )
                        }

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main className="mx-4 mt-5">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Layout;

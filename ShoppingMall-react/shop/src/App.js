/*eslint-disable*/
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
import Data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./components/DetailPage";

function App() {
    const [shoes, setShoes] = useState(Data);
    const navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Shoe-Shop</Navbar.Brand>
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
                                    navigate("/detail");
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

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="jumbo__container">
                                <h1> 20% Season Off </h1>
                                <p>
                                    I have not failed.
                                    I've just found 10,000 ways that won't work.
                                    -Thomas A. Edison-
                                    나는 실패하지 않았다. 작동하지 않는 10,000가지 방법을 찾았습니다.
                                    -토마스 A. 에디슨-
                                </p>
                                <p>
                                    <Button variant="primary">
                                        Learn more
                                    </Button>
                                </p>
                            </div>

                            <div className="container">
                                <div className="row">
                                    {shoes.map((ssss, i) => (
                                        <Card key={i} sh={shoes[i]} />
                                    ))}
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    path="/detail/:id"
                    element={<DetailPage shoes={shoes} />}
                />
                <Route path="*" element={<>없는페이지에요</>} />

                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버임</div>} />
                    <Route path="location" element={<div>주소임</div>} />
                </Route>

                <Route path="/event" element={<Event />}>
                    <Route
                        path="one"
                        element={<p>첫 주문시 양배추즙 서비스</p>}
                    />
                    <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
                </Route>
            </Routes>
        </div>
    );
}
function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img
                src={require(`./img/food${props.sh.id + 1}.jpg`)}
                width="100%"
            />
            <h4>{props.sh.title}</h4>
            <p>{props.sh.content} </p>
            <p>{props.sh.price}</p>
        </div>
    );
}

export default App;

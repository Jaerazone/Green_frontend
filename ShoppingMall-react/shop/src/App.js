/*eslint-disable*/ 
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import {useState} from 'react'
import Data from './data'
import {Routes, Route, Link} from 'react-router-dom';

function App() {

    const [shoes, setShoes] = useState(Data);

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Shoe-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
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

            <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link>

            <Routes>
                <Route path='/' element={<div>메인페이지</div>} />
                <Route path='/detail' element={<div>상세페이지</div>} />
            </Routes>

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
                    <Button variant="primary">Learn more</Button>
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {
                        shoes.map((ssss,i) => (
                            <Card key={i} sh={shoes[i]} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

function Card(props) {
    return (
      <div className="col-md-4">
        <img src={`https://codingapple1.github.io/shop/shoes${props.sh.id+1}.jpg`} width="100%" />
        <h4>{props.sh.title}</h4>
        <p>
          {props.sh.content} & {props.sh.price}
        </p>
      </div>
    );
};

export default App;

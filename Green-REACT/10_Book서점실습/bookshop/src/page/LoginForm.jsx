import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const data = useContext(DataContext);

    const [text, setText] = useState(""); // 값을 받아올 공간 만듦

    const navigate = useNavigate;

    // input의 값을 받아오기
    const onChange = (e) => {
        setText(e.target.value);
    };
    // 받아온 값을 버튼을 눌렀을때 data를 통해서 값 할당
    const loginUser = (e) => {
        e.preventDefalut();
        data.action.setUser(text); //값을 수정하기위해 action에 접근
        //  '/' 페이지로 이동
        navigate("/");
    };

    return (
        <div>
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={onChange}
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import "./Cart.css";
import { stockAdd } from "./../store";
import { changeName, addAge } from "./../store/userSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const cart = useSelector((state) => state.cart);

    return (
        <div>
            <div className="check_all">
                <div className="check_inner">
                    <div className="check_box">
                        <button
                            role="checkbox"
                            className="btn_check"
                            aria-checked="false"
                        >
                            <span className="check">
                                <FaWindowClose /> 전체 선택
                            </span>
                        </button>
                    </div>
                    <button className="btn_delete">
                        아이콘
                        <span>선택 삭제</span>
                    </button>
                </div>
            </div>
            <div className="">
                <h6>
                    {state.user.age}살의 {state.user.name}의 장바구니
                </h6>
                <button
                    onClick={() => {
                        dispatch(addAge(10));
                    }}
                >
                    나이 파라미터 값대로 더추가
                </button>
                <button
                    onClick={() => {
                        dispatch(changeName());
                    }}
                >
                    이름변경
                </button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>사용자이름</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>개당 금액</th>
                            <th>??전체?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((cart, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{cart.name}</td>
                                <td>{cart.stock}</td>
                                <td>{cart.price}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(stockAdd(cart.id));
                                        }}
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Cart;

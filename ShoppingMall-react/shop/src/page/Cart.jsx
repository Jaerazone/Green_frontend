import React from "react";
import { Table } from "react-bootstrap";

const Cart = () => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>??전체?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td rowSpan={3}>안녕</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>하이</td>
                        <td>하이</td>
                        <td>하이</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Cart;

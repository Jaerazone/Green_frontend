import React from "react";
import { Table } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <div className="check_all">
        <div className="check_inner">
          <div className="check_box">
            <button role="checkbox" className="btn_check" aria-checked="false">
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>뽀독뽀독</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;

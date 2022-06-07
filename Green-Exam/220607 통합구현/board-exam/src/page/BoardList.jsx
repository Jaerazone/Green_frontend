import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const BoardList = () => {
    const boardlist = [1, 2, 3, 4, 5];
    const ActiveStyle = {
        color: "green",
        fontWeight: "bold",
    };

    return (
        <div>
            <h1>Board</h1>
            <p>
                파라미터 및 중첩 라우터를 이용하여 아래 Board의 내용이 보입니다
            </p>
            <ul>
                {boardlist.map((list, index) => (
                    <li key={index}>
                        <NavLink
                            to={`/boardlist/${list}`}
                            style={({ isActive }) =>
                                isActive ? ActiveStyle : undefined
                            }
                        >
                            {list}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default BoardList;

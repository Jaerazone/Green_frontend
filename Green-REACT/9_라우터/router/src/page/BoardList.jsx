import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
// NavLink : 라우터의 경로가 일치하는 경우 특정 스타일 또는 클래스 적용

const BoardList = () => {
    const activeStyle = {
        color: "green",
        fontWeight: "bold",
    };
    const numlist = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1>board</h1>
            <ul>
                {numlist.map((num, index) => (
                    <li key={index}>
                        <NavLink
                            to={`/boardlist/${num}`}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            // style 대신 className 으로 써도된다
                        >
                            게시글 {num}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {/* Outlet을 통해서 중첩된 컴포넌트의 화면이 출력 */}
            <Outlet />
        </div>
    );
};

export default BoardList;

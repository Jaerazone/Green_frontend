// Layout.jsx
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    //useNavigate 을 사용해서 원하는 주소로 이동할수 있다.
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const goBoard = () => {
        // 이동할때 현재페이지 기록 남기지 않고 이동
        // about의 기록은 남으나 현재 페이지의 기록은 남지않음
        navigate("/boardlist", { replace: true });
    };
    const goMyPage = () => {
        navigate("/mypage");
    };
    return (
        <div>
            <header style={{ background: "lightgray", padding: 16 }}>
                Header
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goBoard}>게시판으로가기</button>
                <button onClick={goMyPage}>마이페이지로 이동</button>
            </header>
            <main>
                {/* Home과 intro, BoardList 내용이 나오게 하려고 한다 */}
                <Outlet></Outlet>
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>홈 화면입니다</p>
            {/* a 태그와 동일하게 생각 
                a 태그는 새로고침발생해서 prevent 써줘야하지만
                Link 는 안써줘도됨
            */}
            <Link to="/about">소개</Link> <br />
            <Link to="/intro">소개(intro)</Link> <br />
            <Link to="/profile/hong-gil">프로필</Link>
        </div>
    );
};

export default Home;

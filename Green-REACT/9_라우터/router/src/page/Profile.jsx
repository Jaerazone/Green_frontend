import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// (1) data.hong.name 으로 객체접근하거나
// (2) data[hong][name] 으로 객체접근한다
// (1)번처럼 사용하면 값에 접근하기 힘들어서 (2)와 같이 사용하도록한다

const data = {
    hong: {
        name: "hong-gil",
        adress: "부산",
    },
    green: {
        name: "green",
        adress: "부산",
    },
};

const Profile = () => {
    //params가 들어올때 객체 형식으로 들어온다
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>프로필</h1>
            {
                /* JSX 구문 사용 */
                profile ? (
                    <div>
                        <p>파람 username: {params.username}</p>
                        <p>프로필 name: {profile.name}</p>
                        <p>프로필 adress: {profile.adress}</p>
                    </div>
                ) : (
                    <p>존재하지 않는 사람입니다 </p>
                )
            }

            <p>{params.username}</p>
            <Link to="/">홈</Link>
        </div>
    );
};

export default Profile;

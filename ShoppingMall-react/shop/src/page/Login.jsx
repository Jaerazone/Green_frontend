import React, { useState } from "react";
import {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
} from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // 양식 입력에 상태 상수 사용
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const loginToApp = (e) => {
        e.preventDefault();
        console.log("로그인시도");
        // Firebase로 기존 사용자 로그인
        signInWithEmailAndPassword(auth, email, password)
            // 성공적인 인증 후 auth 객체를 반환합니다.
            // userAuth.user는 모든 사용자 세부 정보를 포함합니다.
            .then((userAuth) => {
                // 사용자 정보를 redux 상태에 저장
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL,
                    })
                );

                console.log("디스패치완료");
                navigator("/");
            })

            // 오류가 있는 경우 표시
            .catch((err) => {
                alert(err);
            });
    };

    // 필수 항목으로 만들기 위해 이름 필드에 대한 빠른 확인
    const register = () => {
        if (!name) {
            return alert("이름전체 입력하시오~");
        }

        // Firebase로 새 사용자 생성
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                // 표시 이름과 사진으로 새로 생성된 사용자를 업데이트합니다.
                updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(
                        // redux 상태에서 지속성을 위해 사용자 정보를 전달합니다.
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        )
                    )
                    .catch((error) => {
                        console.log("user not updated");
                    });
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div>
            <div className="login">
                <h1>로그인 인증이 필요합니다</h1>
                <form onSubmit={loginToApp}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="성명 (필수)"
                        type="text"
                    />

                    <input
                        value={profilePic}
                        onChange={(e) => setProfilePic(e.target.value)}
                        placeholder="프로필 사진 URL (옵션)"
                        type="text"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일 주소"
                        type="email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호"
                        type="password"
                    />
                    <button className="login_submit" type="submit">
                        Sign In
                    </button>
                </form>

                <p>
                    Not a member?{" "}
                    <button className="login__register" onClick={register}>
                        회원가입 완료
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;

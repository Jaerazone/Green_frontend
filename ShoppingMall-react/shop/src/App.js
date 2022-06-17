/*eslint-disable*/
import "./App.css";

import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Cart from "./page/Cart";
import DetailPage from "./components/DetailPage";
//
import Login from "./page/Login";
//
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    //사용자가 인증되었는지 페이지 로드 시 확인
    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                // 사용자가 로그인되어 있으면 사용자의 세부 정보를 redux에 보내고
                // 현재 사용자를 상태에 저장합니다.
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, []);

    return (
        <div className="App">
            {/* 사용자가 로그인 했는지 확인 */}
            {!user ? (
                // 로그인 양식
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            ) : (
                //나머지 앱 표시
                <div className="app__body">
                    {
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/detail/:id"
                                    element={<DetailPage />}
                                />

                                <Route path="/login" element={<Login />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/event" element={<Event />}>
                                    <Route
                                        path="one"
                                        element={
                                            <p>첫 주문시 양배추즙 서비스</p>
                                        }
                                    />
                                    <Route
                                        path="two"
                                        element={<p>생일기념 쿠폰받기</p>}
                                    />
                                </Route>
                                <Route path="/about" element={<About />}>
                                    <Route
                                        path="location"
                                        element={<div>주소임</div>}
                                    />
                                    <Route
                                        path="member"
                                        element={<div>멤버임</div>}
                                    />
                                </Route>
                            </Route>

                            <Route path="*" element={<>없는페이지에요</>} />
                        </Routes>
                    }
                </div>
            )}
        </div>
    );
}
function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    );
}

export default App;

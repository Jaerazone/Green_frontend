/*eslint-disable*/
import "./App.css";

import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Cart from "./page/Cart";
import DetailPage from "./components/DetailPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>

                <Route path="*" element={<>없는페이지에요</>} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버임</div>} />
                    <Route path="location" element={<div>주소임</div>} />
                </Route>
                <Route path="/event" element={<Event />}>
                    <Route
                        path="one"
                        element={<p>첫 주문시 양배추즙 서비스</p>}
                    />
                    <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
                </Route>
            </Routes>
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

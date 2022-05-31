import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Intro from "./page/Intro";
import Profile from "./page/Profile";
import BoardList from "./page/BoardList";
import Board from "./page/Board";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* 컴포넌트와 주소 연결 */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/intro" element={<Intro />}></Route>
                <Route path="/profile/:username" element={<Profile />}></Route>
                {/* 중첩라우터를 사용할 경우 - Outlet 컴포넌트가 필요하다 
                    boardlist는 /:id라는 자식을 가지고 있다고 알려줘야함
                */}
                <Route path="/boardlist" element={<BoardList />}>
                    <Route path=":id" element={<Board />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

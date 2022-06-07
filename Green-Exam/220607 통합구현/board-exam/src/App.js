import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./page/Layout";
import Home from "./page/Home";
import About from "./page/About";
import BoardList from "./page/BoardList";
import Board from "./components/Board";

function App() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <Layout />
            <button
                className="back_btn"
                onClick={() => {
                    navigate(-1);
                }}
            >
                뒤로가기
            </button>
            <div style={{ padding: "20px" }}></div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/boardlist" element={<BoardList />}>
                    <Route path=":id" element={<Board />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

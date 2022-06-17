import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/counterSlice";
import "./App.css";
import { useState } from "react";

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [aa, setAa] = useState(0);

    const handleChange = (e) => {
        setAa(Number(e.target.value));
    };

    return (
        <div className="App">
            <h1>리덕스 연습문제</h1>
            <h2>{counter.number}</h2>
            <input type="text" onChange={handleChange} /> <br />
            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    dispatch(incrementByAmount(aa));
                }}
            >
                작성한 숫자만큼 증가
            </button>
        </div>
    );
}

export default App;

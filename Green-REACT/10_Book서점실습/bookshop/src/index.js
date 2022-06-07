import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* 빌드했을때 public url 에 맞춰서 빌드됨-라우터때문에 해야함! 
            기본 URL을 제공 : PUBLIC_URL, 즉 레파지토리의 URL
            (= package.json 에 있는 url)
            pakege.json에 작성된 hompage의 주소
            build 하면 라우터가 잘안됨 그래서 이부분 추가해줘야함
            index.js 에도 basename 추가해야함!
        */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

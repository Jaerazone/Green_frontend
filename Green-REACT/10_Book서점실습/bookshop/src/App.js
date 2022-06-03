import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Footer from "./page/Footer";
import LoginForm from "./page/LoginForm";
import MyPage from "./page/MyPage";
import Home from "./page/Home";
import { DataProvider } from "./context/DataContext";

function App() {
    return (
        <div className="App">
            <DataProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route
                            path="/loginform"
                            element={<LoginForm />}
                        ></Route>
                        <Route path="/mypage" element={<MyPage />}></Route>
                    </Route>
                </Routes>
            </DataProvider>
            <Footer />
        </div>
    );
}

export default App;

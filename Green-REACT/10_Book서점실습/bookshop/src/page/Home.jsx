import React, { useContext } from "react";
import ProductionDispaly from "../components/ProductionDispaly";
import DataContext from "../context/DataContext";

const Home = () => {
    const data = useContext(DataContext);
    return (
        <div>
            <h1>Home</h1>
            {/* 카드 컴포넌트 - ProductionDispaly */}
            {/* 카드 컴포넌트 안에 모달 컴포넌트 - CommentWriteform  */}
            <ProductionDispaly product={data.state.product} />
        </div>
    );
};

export default Home;

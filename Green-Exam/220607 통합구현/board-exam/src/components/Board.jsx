import React from "react";
import { useParams } from "react-router-dom";

const Board = () => {
    const { id } = useParams();
    return (
        <div>
            <h3 style={{ color: "green" }}>{id}페이지 입니다</h3>
        </div>
    );
};

export default Board;

import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteMemo = () => {
    const completedMemos = useSelector((state) =>
        state.memos.filter((memo) => memo.completed === true)
    );

    return (
        <div>
            <h4>Total Complete Memos : {completedMemos.length}</h4>
        </div>
    );
};

export default TotalCompleteMemo;

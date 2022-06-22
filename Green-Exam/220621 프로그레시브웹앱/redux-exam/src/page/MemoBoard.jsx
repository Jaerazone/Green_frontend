import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TotalCompleteMemo from "../components/TotalCompleteMemo";
import { addMemo } from "../redux/memoSlice";
import MemoList from "./MemoList";

const MemoBoard = () => {
    const dispatch = useDispatch();
    const memos = useSelector((state) => state.memos);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    return (
        <div>
            <h1>메모하는 공간입니다</h1>
            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />{" "}
                <br />
                <textarea
                    cols="30"
                    rows="10"
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                ></textarea>{" "}
                <br />
                {/* id: memoList.length === 0 ? 0 : memoList[memoList.length - 1].id+ 1, 
                // nanoid, newDate 툴킷에 내장되어있음 */}
                <button
                    onClick={() => {
                        dispatch(
                            addMemo({
                                title,
                                content,
                            })
                        );
                    }}
                >
                    입력
                </button>
            </div>
            <hr />
            <MemoList title={title} content={content} />
            <TotalCompleteMemo />
        </div>
    );
};

export default MemoBoard;

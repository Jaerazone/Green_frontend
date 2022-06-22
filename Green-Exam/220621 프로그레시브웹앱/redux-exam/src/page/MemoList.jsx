import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMemo, toggleMemo, updateMemo } from "../redux/memoSlice";

const MemoList = () => {
    const dispatch = useDispatch();
    const memos = useSelector((state) => state.memos);

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    const handleCompleteClick = (memo) => {
        dispatch(toggleMemo({ id: memo.id, completed: !memo.completed }));
    };
    const handleRemoveClick = (memo) => {
        dispatch(removeMemo({ id: memo.id }));
    };

    return (
        <ul>
            {memos.map((memo, index) => (
                <li key={memo.id}>
                    <input
                        type="checkbox"
                        checked={memo.completed}
                        onChange={() => {
                            handleCompleteClick(memo);
                        }}
                    />
                    <span>제목 : {memo.title} </span>
                    <button
                        onClick={() => {
                            handleRemoveClick(memo);
                        }}
                    >
                        X
                    </button>
                    <button>수정하기</button>
                    <p>id : {memo.id}</p>
                    <p>내용 : {memo.content}</p>
                    <input
                        type="text"
                        placeholder="수정할 제목을 입력하세요"
                        onChange={(e) => {
                            setNewTitle(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="수정할 내용을 입력하세요"
                        onChange={(e) => {
                            setNewContent(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            dispatch(
                                updateMemo({
                                    id: memo.id,
                                    memo: memo.title,
                                    content: memo.content,
                                })
                            );
                        }}
                    >
                        수정완료
                    </button>
                    <hr />
                </li>
            ))}
        </ul>
    );
};

export default MemoList;

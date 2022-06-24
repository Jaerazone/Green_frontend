import { useState } from "react";

const MemoFunc = () => {
    const [memos, setMemos] = useState([{ id: 1, text: "첫번째 메모입니다" }]);
    const [inputText, SetInputText] = useState("");
    const [id, SetId] = useState(2);

    const onChange = (e) => {
        SetInputText(e.target.value);
        console.log(inputText);
    };

    const addMemo = () => {
        setMemos([...memos, { id: id, text: inputText }]);
        SetId(id + 1);
    };

    const deleteMemo = (id) => {
        const nextMemo = memos.filter((memo) => memo.id !== id);
        setMemos(nextMemo);
    };

    return (
    <div>
        <h1>메모-함수형컴포넌트</h1>
        <input type="text" onChange={onChange} />
        <button onClick={addMemo}>추가</button>
        <ul>
        {
            /** map을 이용한 li 반복 */
            memos.map((memo) => (
            <li key={memo.id}>
                {memo.text}
                <button
                // 함수의 이름만 작성했을때는 함수의 본문(블록)이 들어가지만
                // 함수의 이름과 ()를 같이 작성했을경우 실행된 결과값이 들어간다
                // 안에 값을 넣어줬을때는 익명함수로 감싸서 사용
                onClick={() => {
                    deleteMemo(memo.id);
                }}
                >
                X
                </button>
            </li>
            ))
        }
        </ul>
    </div>
    );
};
export default MemoFunc;
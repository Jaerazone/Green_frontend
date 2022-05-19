// 화살표 함수로 내용 작성  리스트-key
import React from 'react';
import { useState } from 'react';

const ListFunction = () => {
    // useState를 통해 state 작성함
    const [season, setSeason ] = useState ([
        // key값 위해서 id를 작성
        { id : 1, text : '봄'},
        { id : 2, text : '여름'},
        { id : 3, text : '가을'},
        { id : 4, text : '겨울'},
    ]);
    const [inputText, setInputText] = useState('');
    const [inputId, setInputId] = useState(5);

    // deleteSeason : id 값을 받아와서 받아온id를 제외하고 값을 저장하는 함수
    // 받아온 id 값만 제외하였기에 id를 삭제하는 것과 동일
    // id가 3이 아닌 경우에만 nextSeason 배열로 받아서 넣어준다
    const deleteSeason = (id) => { //1. id값을 들고오고
        // 2. 선택한 id 값을 제외한 나머지id값을 다시배열에 넣어줌
        const nextSeason = season.filter((s) => (s.id !== id))
        setSeason(nextSeason); // 3. setSeason을 이용해서 season 값 새로넣어줌
        //4. li에 클릭으로 deleteSeason 메서드 넣어줄거임
        //5. 익명함수로 -화살표함수를 써서 값을 전달하기 위해 한번더 괄호를 {사용함}
    }
    //changeText
    const changeText = (e) => { setInputText(e.target.value) }
    //getText
    const getText = () => {
        const nextSeason = season.concat({
            id : inputId,
            text : inputText,
        });
        setSeason(nextSeason);
        setInputId(inputId+1);
    }


    return (
        <div>
            <h1>🔳화살표함수</h1>
            <h3>3️⃣4️⃣5️⃣6️⃣</h3>

            <h3>2️⃣ input 추가</h3>
            <input type="text" name="inputText" onChange={changeText} />
            <button onClick={getText}> 추가</button>

            <h3> 1️⃣ map이용</h3>
            <ul>{season.map((s)=> (
                <li 
                    // 함수에 값(s.id)을 전달하기 위해서는 익명함수로 감싸서 사용
                    // 전달 할 값이 없으면 그냥 함수이름만 적어줬었음 onClick={deleteSeason} 이런식으로
                    onClick={() => {deleteSeason(s.id)}}
                    key={s.id}
                >
                    {s.text}
                </li>
                ))}
            </ul>

            
        </div>
    );
};

export default ListFunction;

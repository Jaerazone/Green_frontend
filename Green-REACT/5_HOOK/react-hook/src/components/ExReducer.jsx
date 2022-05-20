// reducer를 이용해서 name을 만들고,
// action.type 
// 'reset' : name의 값에 '홍길동', 
// 'write' : name의 값 payload로 받아온 값

// input 태그를 이용해서 값을 수정해서 받아 올수 있도록

import React, { useReducer } from 'react';



function reducer(state, action) {
    switch (action.type) {
        case 'reset' :
            return {name : '홍길동'};
        case 'write' :
            // action.payload = e.target
            return {[action.payload.name] : action.payload.value};
        default :
            return state
    }
}

const ExReducer = () => {
    // ✔👀 useReducer , switch, action.type, button
    const [state, dispatch] = useReducer(reducer, { name : '기본값임'})

    const onChange = (e) => { 
        dispatch({
            type:'write', 
            payload:e.target
    })
    }

    return (
        <div>
            <h2>🤔실습문제</h2>
            <p>{state.name}</p>
            {/* state.name = 홍길동 */}
            <button onClick={()=>{ dispatch({type:'reset'}) }} >기본값</button>
            {/* 값이 바뀔때마다 바뀐값이 state.name */}
            <input type="text" name="name" onChange={onChange} 
            value={state.name} />
            
        </div>
    );
};

export default ExReducer;
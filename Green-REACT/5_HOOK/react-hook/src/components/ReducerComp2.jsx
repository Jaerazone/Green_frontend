import React, { useReducer } from 'react';

function reducer(state, action) { 
    // action으로 받아오는값이 하나일때 return해서 보낼값이 하나라면 아래처럼 적어준다
    // 아래 dispatch(e.target) 타켓이 action으로 들어옴
    // 이전 state의 값을 스프레드 연산자로 안의 내용을 꺼낸후
    // action.name과 action.value를 통해 새로운 속성값 작성
    return { // dispatch를 불렀을 때 return{} 이 값이 리턴됨
        ...state, // name:"ss", nickname:'gg' 
                    // 스프레드 연산자 (기존값을 가져와서 바꾼값을 고치고 업뎃함)
        [action.name] : action.value
        // e.target.name : e.target.value
    }
}

const ReducerComp2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name : 'ss',
        nickname : 'gg'
    })

    // 이벤트가 실행될때 이벤트 객체를 들고와서
    // 현재 실행되는 이벤트 타겟을 dispatch로 넘겨준다
    const onChange = (e) => { dispatch(e.target) }

    return (
        <div>
            <h5>5️⃣ 한가지 조건? switch를 사용할때 방법</h5>
            <p>리턴해서 돌려주는값을 하나만 해주려고함</p>
            <h1>Reducer Hook 2</h1>
            <input type="text" name="name" onChange={onChange} />
            <input type="text" name="nickname" onChange={onChange} />
            <p>{state.name}</p>
            <p>{state.nickname}</p>
        </div>
    );
};

export default ReducerComp2;
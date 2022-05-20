/*eslint-disable*/
import React, { useEffect, useState } from 'react';

const HookComp = () => {
    // useState 는 stateHook 으로 사용된다
    const [count, setCount] = useState(0);
    // stateHook은 여러개 작성할수 있다.
    const [username, setUsername] = useState('홍길동'); // 문자, 배열, 객체 넣을수 있음

    const [date, setDate] = useState(new Date());

    //// componentDidMount, componentDidUpdate
    // 와 동일하게 사용한다
    useEffect(() => {
        //// componentDidMount, componentDidUpdate 와 동일하게 움직임
        document.title = count;
        console.log(count);
        //componentWillUnmount 와 동일한 역할
        return () => {console.log('언마운트 되었습니다')}
    },[]);
    // 두번째 인수를 작성하지 않았을때, 마운트되고 +업데이트가 계속실행됨
    // 두번째 인수로는 [] 안에 업데이트할 변수 이름을 작성해준다
    // 또는 count===1와 같은 조건식을 작성해줄수있다.
    // [] 빈값으로 두면 처음 mount 할때만 실행이 된다.
    //[] 빈값이면 위의 const [count, username, date]가 바뀔때마다 실행됨
    // count가 바뀔때마다 실행하고싶으면 [count] 적으면댐

    // 시간을 출력 > userEffect
    // this.state.date.toLocalTimeString() 으로 화면에 출력
    // 클래스 형에서 작성한 시간 출력내용을 useEffect로 출력하세요
    const tick = () => {
        setDate(new Date())
    }

    // useEffect(function, deps)
    useEffect(() => { 
        console.log('마운트가 되었습니다')
        setInterval(() => tick(), 1000 );
    }, [count]);

    return (
        <div>
            <h2>2️⃣class형//  hook 이용해서 실시간시계</h2>
            <h4>{date.toLocaleTimeString()}</h4>
            

            <h1>1️⃣Hook 설명, StateHook</h1>
            <h3>{username}</h3>
            <p>{count}</p>
            <button
                onClick={ ()=>{setCount(count+1)} }
            >+1</button>

            
        </div>
    );
};

export default HookComp;
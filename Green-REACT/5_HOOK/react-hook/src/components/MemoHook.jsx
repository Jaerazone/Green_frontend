// input 태그로 숫자값을 입력받으면 > inputnum
// 추가 버튼을 눌렀을때, li 태그에 추가됨 > number 배열
// number 배열의 합을 h3태그로 출력 

// consloe.log 에 더하는중이 input을 입력할때마다 뜬다(useState값이 바뀔때마다 뜸)
// 이렇게 계속 실행되는게 아니라 버튼을 눌렀을때만 실행되도록하게하는걸 useMemo

import React, {useState, useMemo, useCallback} from 'react';

const MemoHook = () => {

    const [inputnum, setInputnum] = useState(0); // 기본값 0
    const [number, setNumber] = useState([10, 6]); // 기본값 배열이고,  넣어도되고 안넣어도됨.

    // const onChange = (e) => { setInputnum(e.target.value) }
    const onChange = useCallback((e) => { 
        console.log('onChange가 실행되고 있습니다')
        setInputnum(e.target.value) 
    },[]) // 처음만 실행하도록 [] 넣어줌
    // 콜백함수를 사용해서 처음 랜더링 할때만 함수 생성

    const addNum = useCallback(() => {
        setNumber([ ...number, parseInt(inputnum) ])
        setInputnum(0);
        console.log('addNum 실행중')
    }, [inputnum, number]) // inputnum, number 값이 바뀔때만 이 함수가 실행되도록 useCallback 써준다
    // useCallback함수는 [조건]에 바뀔때 함수가 실행됨, []빈값일땐 처음 랜더링할때 한번만 실행
    // 화살표 함수는 익명함수중 하나이고, 한번 사용하고 버리는 형식인데
    // 이벤트에서 사용되는 익명함수는 이벤트가 실행될때마다 함수를 만들기때문에
    // 동일한 일을 하는 함수는 재사용하기 위해서 useCallback 사용
    // *사용하는 값 또는 메서드가 바뀌지 않을때 랜더할 필요가 없다
    // 메서드는 바뀌지않아서 상관없지만, 사용하는 값은 바뀐다 그러므로 []에 적어줌...

    const allSum = (list) => {  // useMemo를 쓰지않아 useState값이 바뀔때마다 호출
        // for문을 사용해서 더하는 방법// 또는 reduce((a,b)=>(a+b))메소드 사용해서 더하는 방법
        // for(let i=0; i<10; i++) { 실행할내용 }
        // for (m in list) {}  list의 in을 사용해서 반복하여 인덱스값 출력
        // for (n of list) {}  list의 of를 사용해서 요소값을 출력
        console.log('더하는중')
        return list.reduce((a,b) => a+b);
    }

    // useMemo를 사용할 변수, 특정 변수의 값이 바뀔 때 함수 랜더(생성)
    const sum = useMemo(() => allSum(number),[number]) 
    // useMemo(() => 실행되는 함수 , [특정 state가 바뀔때 (조건)])
    // *사용하는 값이 바뀔때만 랜더해서 사용

    return (
        <div>
            <h2 style={{color : 'orange'}}>MemoHook (Hook 두번째수업)</h2>

            <input type="number" value={inputnum} onChange={onChange} />
            <button onClick={addNum} >추가</button>
            {/* 메소드의 리턴값을 보여줌 */}
            <h3>더한 값 : {sum }</h3>
            <ul>
                { number.map((n, i) =>(
                    <li key={i} >{n}</li>
                )) }
            </ul>


            <h3 style={{color : 'orange'}}>Hook 두번째수업 End </h3>
        </div>
    );
};

export default MemoHook;
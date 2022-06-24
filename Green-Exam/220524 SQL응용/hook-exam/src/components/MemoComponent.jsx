import React, { useEffect, useMemo, useState } from 'react';

const MemoComponent = () => {
    
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const tt = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return (()=> clearInterval(tt))
    }, []);


    const [inputNum, setInputNum] = useState(0);
    const [number, setNumber] = useState([]);
    const [sumNumber, setSumNumber] = useState(0);
    const [average, setAverage] = useState(0);

    const onChange = (e) => {
        setInputNum(e.target.value);
        console.log(inputNum);        
    }
    const addNumber = () => {
        setNumber([...number, parseInt(inputNum)])
        setInputNum(0);
    }

    const allSum = useMemo(() => { 
        if(number.length===0) { return setAverage(0) }
        // useMemo를 안쓰니깐 처음 랜더할때 이 함수를 실행을 안함
        // 그래서 적어줌, 두번째 인자값이 바뀔때마다 실행됨 number, sunNumber 값이 변경될때
        setSumNumber(number.reduce((previousValue, currentValue) => previousValue+currentValue,0))
        setAverage(sumNumber/number.length)
    },[number, sumNumber]) // 이 함수가 실행되도록 조건도 넣어줌 -> [number, sunNumber]
    

    return (
        <div className='main_section'>
            <div className='contain_section'>
                <h1 className='clock_section'>{time.toLocaleTimeString()}</h1>
                <h1 className='class_section'>수학시간</h1>
                <hr />
                
                <input type="number" name ={inputNum} onChange={onChange} placeholder="값을 추가해주세요"  />
                <button onClick={addNumber} >추가</button>

                <p>합 : {sumNumber}</p>

                <h2>모든 수의 평균 : {average} </h2>
                <ul>
                    {number.map( (s,i) => (
                        <li key={i} >{s}</li>
                    ))}                
                </ul>
            </div>
        </div>
    );
};

export default MemoComponent;
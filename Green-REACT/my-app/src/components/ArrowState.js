// 함수형 컴포넌트에서 state값 사용 방법
// 1) import를 통해 useState를 react에서 받아온다
// useState는 리액트 16.8에서 추가 > 그 이전에는 함수형?
import { useState } from "react";

const ArrowState = (props) => {
    // useState()의 반환값이 [값, 값을 수정하는 메서드]
    // number의 값은 useState(0)안에 할당한 값
    // 비구조화를 통해 할당
    // setNumber메서드는 setState와 동일한 역할
    const [ number, setNumber ] = useState(0);

    // name값이 홍길동인 state를 추가하고 h1 태그에 출력하세요
    const [ name, setName ] = useState('홍길동');
    // 버튼을 눌렀을때 name 값을 성춘향으로 바꿔서 출력하세요
    // 버튼의 위치는 return 안에 작성

    return (
        <div>
            <h1>{number}</h1>
            <button
                onClick={()=>{
                    setNumber(number+1)
                }}
            >+1증가</button>

            <h1>{name}</h1>
            <button
                onClick={()=>{setName('성춘향')}}
            >버튼을 누르면 이름변경</button>
            
        </div>
    )
}
export default ArrowState;
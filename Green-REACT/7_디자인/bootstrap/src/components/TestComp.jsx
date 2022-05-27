import React from 'react';
import "../util/test.scss"
import classNames from "classnames";

// 구조화 할당으로 props 객체 값 받아옴 {자바스크립트형태}
// onClick 들고오려고 하는데 다른 이벤트들도 여러가지가 있기때문에
// 스프레드 연산자로 ...rest로 들고오고, 지금onClick 형태는 객체형태로 보내줘서 rest도 객체형태로들어온다
// 객체 형태로 들어왔기때문에 다시 {}이거를 풀어줘야함
const TestComp = ({children, size, color, onClick, ...rest }) => {
    return (
        <div>
            {/* <div>
                <h1>scss 적용</h1>
                <div className='MyButton'>버튼입니다</div>
                <div className='MyButton large'>버튼입니다</div>
            </div> */}
            
            {/* 
                props을 통해 size를 받아옴 
                클래스는 문자열로 받아서 아래와 같이 적어줬었음
                <button className='MyButton'>{props.children}</button>
                크기 같은경우는 자바스크립트 형태로 보내야함
                large값이 MyButton안에 클래스로 large로 또 들어가있기 때문에
                // className = "MyButton large"
                // 배열의 에서드의 join 사용하면
                // 쉼표(,)를 안의 값(' ') 문자열로 변환
                MyButton과 props로받아온 size를 조인해서 문자열로 보냄
            */}
            {/* <button className={['MyButton', props.size].join(" ")}> */}
            {/* <button className={['MyButton', props.size, "pink"].join(" ")}> */}
            {/*  classNames를 사용하여 받아옴 (설치) */}
            {/* 9번줄은 ...rest가 객체형식의 {onClick ~~블라블라 인데}, 
            밑줄 rest는  자바스크립트괄호{}이고, ...rest는 onClick~~ 함수 그자체임 
            위에서 객체형식으로 받은 rest를 사용하기 위해 적어둔것..(?) */}
            {/* rest 사용법이 헷깔리면 onClick을 속성값으로 가져와서 확인해보기
            props 값 : onClick,  사용법 : onClick={onClick}으로 사용 */}
            <button className={classNames('MyButton', size, color)} 
            {...rest}
            onClick={onClick} 
            onMouseOver={() => console.log(rest)}>
                {children}
            </button>
            
        </div>
    );
};

TestComp.defaultProps = {
    color : 'blue',
}
export default TestComp;
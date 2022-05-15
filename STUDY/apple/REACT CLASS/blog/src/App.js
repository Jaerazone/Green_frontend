/*eslint-disable*/

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  /*
  // ES6 destructuring 문법
  var [a,b] = [10,100];
  a에는 10을 b에는 100을 넣어주세요~
  Array, object에 있던 자료를 변수에 쉽게 담고 싶을때 사용
  */
 // a변수 = '남자 코드 추천', b변수 = 이 데이터를 변경할 함수가 들어감
 // state 만드는법!
 // state는 1) 변수 대신 쓰는 데이터 저장공간, 2)useState()를 이용해 만들어야함
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '코딩 학원 추천']);
  let posts = '강남 고기 맛집';

  let [따봉, 따봉변경] = useState(0); //[state, state 변경함수] 이런식으로 적어야 재랜더링이 일어남
  
  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  function 순서바꾸기() {
    let newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );

  }

  /*
    <Array, Object state 데이터 수정 방법>
    - 일단 state변경함수 써야함
    - 변경함수에 들어갈건 뒤에 useState( 임마랑 똑같이 생긴 Array여야함 ) => 변경함수(대체할데이터)
    
    * 혹시나 state 데이터를 변경하기 위해서는 복사본을 만든다
      let  newArray = [...글제목]   (그냥 let newArray = 글제목 이런식으로 적으면 값이 공유된다 그래서 [...글제목] 으로 써줘야함)
      이걸 depp copy함
      
      !순서 (꼭 외우길 바람!!)
      1. 일단 기존 state 카피본 만들기
      2. 카피본에 수정사항 반영하기
      3. 변경함수()에 집어넣기
   */
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>제목바꾸기버튼</button>
      <button onClick={ 순서바꾸기 }>순서바꾸기버튼</button>
      <div className="list">
      <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } } >👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <hr />        
      </div>
      <div className="list">
      <h4> { 글제목[1] } </h4>
        <p>2월 17일 발행</p>
        <hr />        
      </div>
      <div className="list">
      <h4> { 글제목[2] } </h4>
        <p>2월 17일 발행</p>
        <hr />        
      </div>
    </div>
  );
}

export default App;

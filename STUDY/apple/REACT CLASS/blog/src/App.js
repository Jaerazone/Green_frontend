/*eslint-disable*/
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '코딩 학원 추천']);
  let posts = '강남 고기 맛집';

  let [따봉, 따봉변경] = useState(0); //[state, state 변경함수] 이런식으로 적어야 재랜더링이 일어남

  let [modal, modal변경] = useState(false);
  
  // function 제목바꾸기() {
  //   let newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경( newArray );
  // }
      //
  // function 순서바꾸기() {
  //   let newArray = [...글제목];
  //   newArray.sort();
  //   글제목변경( newArray );
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>제목바꾸기버튼</button> */}
      {/* <button onClick={ 순서바꾸기 }>순서바꾸기버튼</button> */}


      {
        글제목.map(function(글){
          return (
            <div className="list">
            <h4> { 글 }  <span onClick={ ()=>{ 따봉변경(따봉+1) } } >👍</span> {따봉}   </h4>
              <p>2월 17일 발행</p>
              <hr /> 
            </div>
          )
        })
      }
      

      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button>
        {
            modal === true
            ? <Modal />
            : null
        }
        
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목 </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

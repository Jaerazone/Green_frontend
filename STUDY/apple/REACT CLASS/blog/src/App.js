/*eslint-disable*/
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '코딩 학원 추천']);
  let [따봉, 따봉변경] = useState(0); //[state, state 변경함수] 이런식으로 적어야 재랜더링이 일어남
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState([]);
  

  // const addMemo = () => {

  //   const 새로운글제목 = 글제목.concat([입력값])
  //   글제목변경(새로운글제목)
  //   console.log(새로운글제목)
  // }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        글제목.map(function(글, i){
          return (
            <div className="list" key={i} >
            <h4 onClick={ () => {누른제목변경(i)}} > { 글 }  <span onClick={ ()=>{ 따봉변경(따봉+1) } } >👍</span> {따봉}   </h4>
              <p>2월 17일 발행</p>
              <hr /> 
            </div>
          )
        })
      }
      
      <div className='publish'>
        {입력값}
        <input type="text"  onChange={ (e) =>{입력값변경(e.target.value)} } />
        {/* <button onClick={ ()=>{addMemo()} }>전송</button> */}
        <button onClick={ ()=>{
          const arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        } }>전송</button>
      </div>

      <Profile />

      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button>
        {
            modal === true
            ? <Modal 글제목={글제목} 누른제목={누른제목} />
            : null
        }
        
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 {props.글제목[props.누른제목]} </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = { name : 'Kim', age : 30 }
  }

  changeName = () => { 
    this.setState( {name : 'Park'} )
  }

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다</p>
        <button onClick={ this.changeName } >버튼</button>
      </div>
    )
  }
}



export default App;

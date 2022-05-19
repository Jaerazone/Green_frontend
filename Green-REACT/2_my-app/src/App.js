import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import ArrowComponent from './components/ArrowComponent';

import LoginTrue from './components/LoginTrue';
import LoginFalse from './components/LoginFalse';

import MyLogin from './components/MyLogin'
import ArrowLogin from './components/ArrowLogin'

import StateComponent from './components/StateComponent'

import ArrowState from './components/ArrowState'
// 함수형 컴포넌트
function App() {
  const login = true;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>내용을 수정하였습니다</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <ArrowComponent name='3'>태그사이로 전달되는 props</ArrowComponent>
        {/* <ArrowComponent name="지정된이름">태그사이로 전달되는 props</ArrowComponent> */}

        <MyLogin login={true} name="성춘향"></MyLogin>  {/* 불린값으로 넣기 */}
        <ArrowLogin  
          login="트루" // props속성의 이름을 통해서 props값을 전달할 수 있다
                      // 이때 들어가는 값은 문자열 
                      // 다른 자료형을 사용하려면 {} 을 이용해서 자바스크립트로 넣어준다
          /> 

        <StateComponent />

        <ArrowState />
      </header>

      {
        login === true
        ? <LoginTrue></LoginTrue>
        : <LoginFalse />
      }

    </div>
  );
}

export default App;

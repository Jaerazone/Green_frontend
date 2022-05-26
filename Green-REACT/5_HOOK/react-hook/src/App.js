import './App.css';

import HookComp from './components/HookComp'
import ReducerComp from './components/ReducerComp'
import ReducerComp2 from './components/ReducerComp2'
import ExReducer from './components/ExReducer'
import MemoHook from './components/MemoHook'

import React from 'react';
import { ThemeContext } from "./components/ThemeContext";
import ContextHook from "./components/ContextHook";
import DispatchContext from './components/DispatchContext'

function reducer(state, action) {
  // 여러가지 값을 적기위해 switch 사용
  switch (action.type) {
      case 'id_plus':
          return {id : state.id+1};
      case 'text_chage':
          return {text : action.payload};
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, [{ id : 1, text : 'reducer의 텍스트입니다'}])
  
  return (
    <div className="App">
      <header className="App-header">

        <ThemeContext.Provider value={{id:0, text:"객체형식입니다"}}>
        {/* <ThemeContext.Provider value={0}> */}
          <ContextHook />
        </ThemeContext.Provider>

        <DispatchContext.Consumer>
          { (vlaue) => <button> {vlaue} </button> }
        </DispatchContext.Consumer>

        
        

        <MemoHook />

        <ExReducer />
        <ReducerComp2 />
        <ReducerComp />
        <HookComp />

      </header>
    </div>
  );
}

class ThemedButton extends React.Component {
  // 현재 선택된 테마 값을 읽기 위해 contextType을 지정합니다.
  // React는 가장 가까이 있는 테마 Provider를 찾아 그 값을 사용할 것입니다.
  // 이 예시에서 현재 선택된 테마는 dark입니다.
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

const Button = (props) => {
  return (
    <div>
      <h1>{props.theme}</h1>
    </div>
  );
};

export default App;

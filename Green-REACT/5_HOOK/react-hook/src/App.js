import './App.css';

import HookComp from './components/HookComp'
import ReducerComp from './components/ReducerComp'
import ReducerComp2 from './components/ReducerComp2'
import ExReducer from './components/ExReducer'
import MemoHook from './components/MemoHook'

import React from 'react';

export const ThemeContext = React.createContext('light');

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <ThemeContext.Provider value="dark">
        <ContextHook />
        </ThemeContext.Provider>
        

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

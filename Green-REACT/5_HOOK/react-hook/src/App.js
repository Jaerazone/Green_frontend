import './App.css';
import HookComp from './components/HookComp'
import ReducerComp from './components/ReducerComp'
import ReducerComp2 from './components/ReducerComp2'
import ExReducer from './components/ExReducer'
import MemoHook from './components/MemoHook'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MemoHook />

        <ExReducer />
        <ReducerComp2 />
        <ReducerComp />
        <HookComp />

      </header>
    </div>
  );
}

export default App;

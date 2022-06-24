import './App.css';
import MemoComponent from './components/MemoComponent'
import MemoFunc from './components/MemoFunc'
import MemoClass from './components/MemoClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2>수학시간</h2>
        <MemoComponent />
    
        <h2>함수형 메모</h2>
        <MemoFunc />

        <h2>클래스형 메모</h2>
        <MemoClass />

      </header>
    </div>
  );
}

export default App;

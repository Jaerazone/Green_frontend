import './App.css';
import EventClass from './components/EventClass'
import InputClass from './components/InputClass'
import InputArrow from './components/InputArrow'
import RefClass from './components/RefClass'
//import TestRefClass from './components/TestRefClass'
//import TestRefClass22 from './components/TestRefClass22'
import RefComponent from './components/RefComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <EventClass name='이벤트' />

        <InputClass />

        <InputArrow />

        <RefClass />

        {/* <TestRefClass />
        <TestRefClass22 /> */}
        <RefComponent />
      </header>
    </div>
  );
}

export default App;

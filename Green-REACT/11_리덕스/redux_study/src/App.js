import "./App.css";
import CounterContainer from "./containers/ConterContainer";
import CounterHookContainer from "./containers/ConterHookContainer";
import TodosContainer from "./containers/TodosContainer";
import TodocHookContainer from "./containers/TodosHookContainer";
function App() {
    return (
        <div className="App">
            <CounterContainer />
            <CounterHookContainer />
            <hr></hr>
            <TodosContainer />
            <TodocHookContainer />
        </div>
    );
}

export default App;

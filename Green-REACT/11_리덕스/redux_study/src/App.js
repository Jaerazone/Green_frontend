import "./App.css";
import CounterContainer from "./containers/ConterContainer";
import CounterHookContainer from "./containers/ConterHookContainer";
import CounterAsycContainer from "./containers/CounterAsycContainer";
import CounterSagaContainer from "./containers/CounterSagaContainer";
import NewsItemAsycContainer from "./containers/NewsItemAsycContainer";
import TodosContainer from "./containers/TodosContainer";
import TodocHookContainer from "./containers/TodosHookContainer";

function App() {
    return (
        <div className="App">
            <NewsItemAsycContainer />
            <hr />
            <CounterContainer />
            <CounterHookContainer />
            <CounterAsycContainer />
            <CounterSagaContainer />
            <hr></hr>
            <TodosContainer />
            <TodocHookContainer />
        </div>
    );
}

export default App;

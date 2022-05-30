import axios from "axios";
import "./App.css";
import NewsList from "./components/NewsList";

function App() {
  // async와 await 이용
  const onClick = async () => {
    const respones = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
    );
    console.log(respones);
  };

  return (
    <div className="App">
      <button onClick={onClick}> 누르세요</button>
      <NewsList />
    </div>
  );
}

export default App;

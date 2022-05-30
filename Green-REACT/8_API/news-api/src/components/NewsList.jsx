import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const NewsList = () => {
  const [news, setNews] = useState("");

  // async와 await 이용
  const onClick = async () => {
    const respones = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
    );
    console.log(respones.data.articles[0]);
    setNews(respones.data.articles[0]);
  };

  // useEffect 자체에 async 붙일수 없음, 안에 함수를 만들어 붙여줌
  // axios를 사용할때 외부에서 값을 받아오기때문에 어떤에러가 발생할지 모른다
  // 그러므로 try catch를 사용해서 에러발생시 콘솔로 찍게함
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respones = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
        );
        console.log(respones.data.articles[0]);
        setNews(respones.data.articles[0]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []); // 업데이트할필요없으니 빈배열넣어줌

  return (
    <div>
      <h1>뉴스리스트입니다</h1>
      <button onClick={onClick}> 누르세요</button>
      <a href={news.url}>
        <img src={news.urlToImage} style={{ width: "50%" }} alt="" />
      </a>
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsList;

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card";
import Data from "../data";
import { data } from "../components/Loading";

const Home = () => {
  const [food, setFood] = useState(Data);
  const [클릭횟수, 클릭횟수변경] = useState(2);
  const [alertdata, alertSet] = useState(true);

  useEffect(() => alertSet(true), [클릭횟수]);

  return (
    <div>
      <div className="row">
        {data.map((loader, i) => (
          <div key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-2 p-5">
            <div data-tip={loader.name} className="loaderBox">
              <loader.Component {...loader.props} />
            </div>
          </div>
        ))}
      </div>
      <div className="jumbo__container">
        <h1> 20% Season Off </h1>
        <p>
          I have not failed. I've just found 10,000 ways that won't work.
          -Thomas A. Edison-
          나는 실패하지 않았다. 작동하지 않는 10,000가지 방법을 찾았습니다.
          -토마스 A. 에디슨-
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>

      <div className="container">
        <div className="row">
          {food.map((ssss, i) => (
            <Card key={i} sh={food[i]} />
          ))}
        </div>
      </div>

      {클릭횟수 == 4 ? null : (
        <button
          onClick={() => {
            // 로딩중UI 띄우기~
            if (alertdata) {
              alert("로딩중입니다.");
            }
            axios
              .get(
                `https://raw.githubusercontent.com/Jaerazone/dogfoodJson/main/data${클릭횟수}.json`
              )
              .then((결과) => {
                setFood([...food, ...결과.data]); // [...food] food 벗기고 다시 []로 감싸는 복사본
                클릭횟수변경(클릭횟수 + 1);
                console.log(`클릭횟수:${클릭횟수}`);
                alertSet(false); // 로딩중이라는 UI 사라지게함
              })
              .catch(() => {
                console.log("실패했습니다");
                // 에러나면 로딩중 UI 숨기기~
                alertSet(false);
              });
          }}
        >
          버튼
        </button>
      )}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  padding: 20px;
  background-color: gray;
`;

const YellowBtn = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

const NewBtn = styled.button(YellowBtn); // 기존 스타일 복사가능

const MyAlert = styled.div`
  background-color: #eeeeee;
  padding: 15px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;

const MyAlert2 = styled(MyAlert)`
  color: green;
`;

const DetailPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  const [alert, setAlert] = useState(true);
  const [count, setCount] = useState(0);
  const [inputtext, setInputtext] = useState(0);

  const { id } = useParams();
  console.log(id);
  const shoesItem = props.shoes.find((item) => item.id == id);
  console.log(shoesItem);

  return (
    <div>
      <div className="container">
        {alert == true ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          버튼
        </button>
        <Box>
          <YellowBtn bg="blue">버튼</YellowBtn>
          <YellowBtn bg="yellow">버튼</YellowBtn>
          <YellowBtn bg="rgb(253, 186, 242)">버튼</YellowBtn>
        </Box>
        <MyAlert2>
          <p>재고가 얼마 남지 않았습니다</p>
        </MyAlert2>
        <div className="row">
          <div className="col-md-6">
            <img
              src={require(`../img/food${shoesItem.id + 1}.jpg`)}
              alt=""
              width="50%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{shoesItem.title}</h4>
            <p>{shoesItem.content}</p>
            <p>
              {shoesItem.price}원
              {isNaN(inputtext) == true ? (
                <p>숫자만 입력해주세요</p>
              ) : (
                `* ${inputtext} 개 = 총 ${shoesItem.price * inputtext}원`
              )}
            </p>
            <br />
            <input
              type="text"
              placeholder="수량을 입력하세요"
              onChange={(e) => {
                setInputtext(e.target.value);
              }}
            />
            <br />
            <button className="btn btn-danger">주문하기</button>
            <YellowBtn bg="blue"></YellowBtn>
            <YellowBtn bg={"red"}></YellowBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

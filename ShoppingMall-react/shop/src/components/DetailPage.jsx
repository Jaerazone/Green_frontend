import React from "react";
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

const DetailPage = (props) => {
    const { id } = useParams();
    console.log(id);
    const shoesItem = props.shoes.find((item) => item.id == id);
    console.log(shoesItem);

    return (
        <div>
            <div className="container">
                <Box>
                    <YellowBtn bg="blue">버튼</YellowBtn>
                    <YellowBtn bg="yellow">버튼</YellowBtn>
                    <YellowBtn bg="rgb(253, 186, 242)">버튼</YellowBtn>
                </Box>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={require(`../img/food${shoesItem.id + 1}.jpg`)}
                            alt=""
                            width="100%"
                        />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{shoesItem.title}</h4>
                        <p>{shoesItem.content}</p>
                        <p>{shoesItem.price}원</p>
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

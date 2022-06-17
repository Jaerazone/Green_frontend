import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import TabContent from "./TabContent";

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

const DetailPage = () => {
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }, []);

    const foods = useSelector((state) => state.foods);
    const dispatch = useDispatch();

    const [alert, setAlert] = useState(true);
    const [count, setCount] = useState(0);
    const [inputtext, setInputtext] = useState(0);
    const [tab, setTab] = useState(0); // 탭버튼이 여러개라서 불린값말고 숫자로줌

    const [fade2, setFade2] = useState("");

    useEffect(() => {
        let a = setTimeout(() => {
            setFade2("end");
        }, 10);
        return () => {
            clearTimeout(a);
            setFade2("");
        };
    }, []);

    const { id } = useParams();
    console.log(`params:${id}`);
    const selectItem = foods.find((food) => food.id == id);
    console.log(selectItem);

    return (
        <div>
            <div className={`container start ${fade2}`}>
                {alert == true ? (
                    <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
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
                            src={require(`../img/food${selectItem.id + 1}.jpg`)}
                            alt=""
                            width="50%"
                        />
                        {console.log(`foodItem.id: ${selectItem.id}`)}
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{selectItem.title}</h4>
                        <p>{selectItem.content}</p>
                        <p>
                            {selectItem.price}원
                            {isNaN(inputtext) == true ? (
                                <p>숫자만 입력해주세요</p>
                            ) : (
                                `* ${inputtext} 개 = 총 ${
                                    selectItem.price * inputtext
                                }원`
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
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                dispatch(addItem(selectItem));
                            }}
                        >
                            주문하기
                        </button>
                        <YellowBtn bg="blue"></YellowBtn>
                        <YellowBtn bg={"red"}></YellowBtn>
                    </div>
                </div>
                <Nav variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => setTab(0)}>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => setTab(1)}>
                            Option 1
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>
                            Option 2
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            eventKey="disabled"
                            onClick={() => setTab(3)}
                            disabled
                        >
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab} foods={foods} />
            </div>
        </div>
    );
};

export default DetailPage;

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card";
import { data } from "../components/Loading";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { foodlistAdd } from "./../store/foodsSlice";

const Home = () => {
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.foods);
    const [클릭횟수, 클릭횟수변경] = useState(2);
    const [alertdata, alertSet] = useState(true);

    useEffect(() => alertSet(true), [클릭횟수]);

    return (
        <div>
            <div className="row">
                {data.map((loader, i) => (
                    <div
                        key={i}
                        className="col-xs-12 col-sm-6 col-md-4 col-lg-2 p-5"
                    >
                        <div data-tip={loader.name} className="loaderBox">
                            <loader.Component {...loader.props} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="jumbo__container">
                <h1> 슬기로운 화식생활 </h1>
                <p>
                    90% 이상 소화흡수율! 무첨가제!
                    <br />
                    신선한 재료로 만든 자연화식
                </p>
                <p>
                    <Button variant="warning">Learn more</Button>
                </p>
            </div>

            <div>
                <div className="foods_container">
                    {foods.map((food, index) => (
                        <Link
                            key={index}
                            className="foods_list"
                            to={`/detail/${food.id}`}
                        >
                            <Card food={food} />
                        </Link>
                    ))}
                </div>
            </div>

            {클릭횟수 === 4 ? null : (
                <Button
                    variant="warning"
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
                                dispatch(foodlistAdd(결과.data));
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
                </Button>
            )}
        </div>
    );
};

export default Home;

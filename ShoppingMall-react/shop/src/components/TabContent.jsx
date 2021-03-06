import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Stars = styled.div`
    display: flex;
    padding-top: 5px;
    & svg {
        color: gray;
        cursor: pointer;
    }

    :hover svg {
        color: #fcc419;
    }

    & svg:hover ~ svg {
        color: gray;
    }

    .yellowStar {
        color: #fcc419;
    }
`;

const TabContent = ({ tab, foods }) => {
    const [fade, setFade] = useState("");

    const ARRAY = [0, 1, 2, 3, 4];
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = (index) => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        console.log(clickStates);
        setClicked(clickStates);
    };

    useEffect(() => {
        sendReview();
    }, [clicked]); //컨디마 컨디업

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        // fetch('http://52.78.63.175:8000/movie', {
        //   method: 'POST',
        //   Headers: {
        //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
        //   },
        //   body: JSON.stringify({
        //     movie_id:1
        //     star: score,
        //   }),
        // });
    };

    useEffect(() => {
        let a = setTimeout(() => {
            setFade("end");
        }, 10);
        return () => {
            clearTimeout(a);
            setFade("");
        };
    }, [tab]); // tab이 변경될때마다 클래스명을 부착해줘

    return (
        <div className={`start ${fade}`}>
            {
                [
                    <div>
                        {foods[0].title} <br />
                        <h3>리뷰</h3>
                        <hr />
                        <Stars>
                            {ARRAY.map((el, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size="50"
                                        onClick={() => handleStarClick(el)}
                                        className={clicked[el] && "yellowStar"}
                                    />
                                );
                            })}
                        </Stars>
                    </div>,

                    /////////////////// 다른 탭

                    /////////////////// 다른 탭

                    /////////////////// 다른 탭

                    /////////////////// 다른 탭
                    <div>내용1</div>,
                    <div>내용2</div>,
                    <div>내용3</div>,
                ][tab]
            }
        </div>
    );
};

export default TabContent;

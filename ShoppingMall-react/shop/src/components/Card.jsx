import React from "react";

const Card = (props) => {
    return (
        <div className="col-md-4">
            <img
                src={require(`../img/food${props.sh.id + 1}.jpg`)}
                width="100%"
                alt="메인 상품 목록"
            />
            {console.log(props.sh.id + 1)}
            <h4>{props.sh.title}</h4>
            <p>{props.sh.content} </p>
            <p>{props.sh.price} 원</p>
        </div>
    );
};
export default Card;

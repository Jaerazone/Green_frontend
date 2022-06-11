import React from "react";

const Card = ({ food }) => {
  return (
    <div className>
      <img
        src={require(`../img/food${food.id + 1}.jpg`)}
        width="100%"
        alt="메인 상품 목록"
      />
      {console.log(food.id + 1)}
      <h4>{food.title}</h4>
      <p>{food.content} </p>
      <p>{food.price} 원</p>
    </div>
  );
};
export default Card;

import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = (props) => {

    const {id} = useParams();
    console.log(id);
    const shoesItem = props.shoes.find((item) => item.id == id )
    console.log(shoesItem);
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt='' width="100%" />
                    </div>
                    <div className="col-md-6">
                    <h4 className="pt-5">{shoesItem.title}</h4>
                    <p>{shoesItem.content}</p>
                    <p>{shoesItem.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default DetailPage;
// 클래스형 컴포넌트
import React, { Component } from 'react';

// 리액트에서 Component를 상속받아 사용
class EventClass extends Component {
    // props 값은 부모 컴포넌트에서 받아오는 값이므로 component에서 미리 받아오고 있다
    constructor(props) {
        super(props); // 받아온 값을 super로 전달, 사용할때는 this로 사용
        // 클래스형 컴포넌트에서 사용하기위해 constructor에 저장
        // 윗부분이랑 아래this까지 날리고 // state = {} 형식으로 constructor 바깥에 작성도 가능하다
        this.state = { 
            message : '메시지입니다',
        };
        // 클래스 안에서 사용하기 위해 this.onClickEvent 함수 이름을 작성 (this.onClickEvent)
        // = 아래onClickEvent = ()~~ 이라는 함수를 이class에서 찾아서 (= this.onClickEvent)
        // (this=현재class)에 bind 해준다 (.bind(this))
        // 연결할때 this.setState의 this 위치를 알려주기 위해 bind(this)로 연결
        this.onClickEvent = this.onClickEvent.bind(this) // 여기서말하는 this들은 이 자체 class를뜻함

        this.onChangMessage = this.onChangMessage.bind(this)
    }
    
    //onClickEvent = () => { 화살표함수 모양으로 해도되고
    onClickEvent(){ // 이것처럼 함수형 모양으로 만들어도된다
        this.setState(() => ({
            message : '메세지가 바뀌었습니다',
        }))
        console.log(this.state.message);
    };

    // onChangMessage() {} -> message : "메시지입니다" 로 값을 수정하는 함수로 만들고
    onChangMessage() {
        this.setState(() => ({
            message : '메세지입니다',
        }))
        console.log(this.state.message);
    }
    // button에 onClick = {} 을 이용하여 연결하세요
    

    render() {
        const { name } = this.props; // 부모로부터 받아옴 // 구조화할당
        const { message } = this.state; // 자식state 데이터 사용 // 구조화할당

        return (
            <div>
                <h1>{name}</h1>
                <h3>{message}</h3>
                <button 
                // 이벤트 사용할 때 케멜형식으로 
                // 안에 실행할 내용은 함수로 감싸서 실행
                    onClick={()=>{
                        this.setState(() => ({
                            message : '메세지가 바뀌었습니다',
                        }))
                        console.log(message);
                    }}>
                    버튼을 누르면 메시지가 바뀝니다
                </button>
                <button onClick={this.onClickEvent} // this를 통해서 메서드를 들고온다
                >
                    클릭
                </button> <br />
                <button onClick={this.onChangMessage}>메세지 원래대로 돌려죠</button>
            </div>
        );
    }
}

export default EventClass;
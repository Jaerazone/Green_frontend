// 클래스형 컴포넌트
import React, { Component } from 'react';

// input태그의 값을 받아와서 수정하는 컴포넌트
class InputClass extends Component {
    constructor(props) {
        super(props);
        this.state ={
            message : '메세지',
            user : '유저'
        };
        this.inputChange = this.inputChange.bind(this);
        this.alertOpen = this.alertOpen.bind(this);
    }

    //input 값이 바뀔때마다 값을 state에 넣어주는 메서드
    inputChange(e) { // input의 값이 바뀔때마다 onChange 메서드로인해 message 값이 바뀌게된다
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    // 버튼을 더블클릭했을때, onDoubleClick
    // message와 user값을 alert으로 출력하는 메서드
    // state의 message와 user에 값을 넣어준 후 더블클릭
    alertOpen() {
        alert(`message : ${this.state.message} 와 user : ${this.state.user} `);
    }
    // 화살표 함수로 작성할 시 bind로 this를 연결해주지 않아도된다 
    // (this값이 지정되어있지 않아서 이함수가 불리는 곳을 this라 칭함)
    showMessage = () => {
        alert(`message : ${this.state.message} , state: ${this.state.user} `);
    }

    render() {
        const { message, user } = this.state
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text" 
                    name="message"
                    placeholder='아무거나 입력하세요'
                    value={message} // 이건 처음 초기값이라고 생각하면되고
                    onChange={(e) => { // input의 값이 바뀔때마다 onChange 메서드로인해 message 값이 바뀌게된다
                        this.setState(() => ({
                            // 객체 형태 {키 : 값}
                            // 키를 [] 감싸면 가리키는 실제값이 사용
                            // 임마의.타겟.name은 = message, 즉, message : e.target.value 를 뜻함
                            [e.target.name] : e.target.value,
                        }));
                    }}
                />
                <input type="text" name = "user" onChange = {this.inputChange} />
                
                <button onDoubleClick={this.alertOpen}>버튼을 두번 클릭하세요</button>
                <button onDoubleClick={this.showMessage}>화살표함수 버튼클릭 두번</button>
                

                <h2>{message}</h2>
                <h3>{user}</h3>



            </div>
        );
    }
}

export default InputClass;
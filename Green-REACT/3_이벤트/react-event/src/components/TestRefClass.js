import React, { Component } from 'react';

class TestRefClass extends Component {
    constructor(props) {
        super(props);

        this.myInput = null;
        // this.myInputRef = (element) => {
        //     this.myInput = element;
        // };

        this.changeMyInput = () => {
            if(this.myInput) this.myInput.style.backgroundColor = 'red';
        }
    }
/*
    1. ref 콜백함수사용
    변수에 넣어서 실행하느냐?
    아니면 ref = 에 바로 적어서 실행하느냐 2가지가 있고
    this.myInputRef 로 input태그를 참조함
    8번줄 -
*/    

    render() {
        return (
            <div>
                <h1>ref 콜백함수 1번째 방법</h1>
                <input 
                    type="text"
                    //ref={this.myInputRef} //가져오고 싶은 요소에 레퍼런스 속성 및 레퍼런스명 지정
                    ref={(element) => {
                        this.myInput = element;}}
                />
                <button
                    onClick={this.changeMyInput}
                >색을 바꿉니다</button>
            </div>
        );
    }
}

export default TestRefClass;
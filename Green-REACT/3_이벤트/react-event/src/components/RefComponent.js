// class 컴포넌트에서 ref 사용하는 방법
// testRefClass 컴포넌트를 들고와서 현재 컴포넌트에서 제어해보려고함

// 주요개념 - 리스트와 key

import React, { Component } from 'react';
import TestRefClass from './TestRefClass';
import TestRefClass22 from './TestRefClass22';


class RefComponent extends Component {
    constructor(props) {
        super(props);
        this.componentRef = null;
        this.changeAll = () => {
            console.log(this.componentRef);
            console.dir(this.componentRef);
            this.componentRef.changeMyInput();
            this.componentRef.changeColorInput();
        }
    }


    render() {
        return (
            <div>
                <h1>ref 컴포넌트 참조방법</h1>
                <p> testRefClass 컴포넌트를 들고와서 <br></br>
                    현재 컴포넌트에서 제어 해보려고 한다</p>
                <TestRefClass 
                //ref를 사용해서 엘리먼트 확인
                // 콜백함수를 ref안에 작성
                    ref={(element)=>{this.componentRef=element}}
                />
                <button onClick={this.changeAll}>모두 바꾸기</button>

                <TestRefClass22 
                ref={(element)=>{this.componentRef=element}}
                />
            </div>
        );
    }
}

export default RefComponent;
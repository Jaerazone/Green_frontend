// 클래스형 컴포넌트
// 클래스형 컴포넌트 만들때 첫째로 1. react에서 component를 받아와서 상속을 하게된다
import { Component } from 'react';

class MyComponent extends Component { // 2. 상속을 받아서 이안에서 render를 통해 내보낸다
    // 클래스형 컴포넌트에서는 함수 대신에 render를 통해 내보낸다
    render() {
        const name = "react";
        return (
            <div>
                <h1>{name} 첫 컴포넌트입니다</h1>
            </div>
        )
    }
}
export default MyComponent;
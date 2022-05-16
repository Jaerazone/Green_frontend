// 클래스형 컴포넌트
import { Component } from 'react';

class LoginFalse extends Component {
    render () {
        return (
            <div>
                <h1>로그인이 필요합니다</h1>
                <p>리액트를 시작하였습니다</p>
            </div>
        )
    }
}
export default LoginFalse;
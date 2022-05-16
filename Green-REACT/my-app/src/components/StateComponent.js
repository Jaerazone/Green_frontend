// 클래스형 컴포넌트 state 사용부분!
// state사용 좋은점!? -> set state를 통해 값을 직접 바꿀수 있다
import { Component } from 'react';

// 자식 자체의 state를 사용하게되면서 
// 이컴포넌트 자체가 값을 가지게되기 때문에, 
// 부모의 props를 따로 적어준다
// 18버전 업데이트 되어서 조금 편리하게 사용되기시작함
// (22.4월에 업데이트됨)

class StateComponent extends Component {
    constructor(props) { // 상속받은 props값과, state값을 같이 적기위해 씀
        super(props);
        this.state = {
            number :0
        };
    }

    render() {
        const { number } = this.state;
        return (
            <div style={{color:'brown'}}>
                <h1>{number}</h1>
                <button 
                    onClick={() => {
                        this.setState({number : number+1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}


export default StateComponent;
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
        const { number, name } = this.state;
        return (
            <div style={{color:'brown'}}>
                <h1>{number}</h1>
                <button 
                    //함수 형식으로 setState의 내용 전달
                    // prevState =>({state : 값}) 와 같은 형식으로 전달
                    // 객체 형식
                    onClick={() => {
                        this.setState((prevState) => ({
                            number : number+1,
                        }));
                    }}
                >
                    +1 증가
                </button>
                    {/* 버튼을 눌렀을때 값을 0으로 초기화하는 버튼 */}
                    <button
                        onClick={() => {
                            this.setState(() => ({
                                number : 0,
                            }))
                        }}
                    >0초기화</button>
                    {/* 버튼을 눌렀을때 값을 -1씩 감소하는 버튼 */}
                    <button
                        onClick={()=> {
                            this.setState((prevState) => ({
                                number : prevState.number-1,
                            }))
                        }}
                    >-1 감소</button>
                    
                    <h2>{name}</h2>
                    <button
                    onClick={()=>{
                        this.setState(()=> ({
                            name : '김재라',
                        }))
                    }}
                    >버튼을 누르면 이름이 나옵니다</button>


            </div>
        );
    }
}


export default StateComponent;
import React, { Component } from 'react';

class LifeComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            students : [
                {id : 1, name : '홍길동'}
            ],
            date : new Date()
        }
    }
    // 2️⃣함수를 부를때마다 다시 값을 호출 (마운트될때)
    tick = () => {
        this.setState({date : new Date()})
    }

    componentDidMount() {
        console.log('마운트가 되었습니다')
        this.timerId = setInterval(() => { // 2️⃣계속 실행되기때문에 언마운트에서 종료하도록, timerId라고 이름을 정해줌
            this.tick()
        }, 1000);
    }
/*  componentDidMount()는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다.
    DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다. 
    외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절한 위치입니다. */

    componentDidUpdate(){
        console.log('업데이트가 되었습니다')
    }
/*  componentDidUpdate()는 갱신이 일어난 직후에 호출됩니다. 
    이 메서드는 최초 렌더링에서는 호출되지 않습니다 */

    componentWillUnmount(){
        console.log('ㅇ언마운트 되었습니다')
        clearInterval(this.timerId); // 2️⃣인터벌 종료
    }
/*  componentWillUnmount()는 컴포넌트가 마운트 해제되어 제거되기 직전에 호출됩니다. 
    이 메서드 내에서 타이머 제거, 네트워크 요청 취소, 
    componentDidMount() 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행하세요.*/

    render() {
        return (
            <div>
                <h1>✨라이프 사이클 확인</h1>
                <h3>2️⃣ 현재 시간 가져오기 (값이 바뀔때마다 update됨) </h3>
                <h3>{this.state.date.toLocaleTimeString()}</h3>


                <h3>1️⃣ 버튼 누르면 ul에 추가됨. mount update 확인</h3>
                <p>update는 최초 랜더링에서는 호출되지 않음</p>
                <button onClick={() => { 
                    const nextStudent = this.state.students.concat({
                        id : 2,
                        name : '익명',
                    })
                    this.setState({students : nextStudent})
                }}>값 추가</button>
                <ul>
                    {
                        this.state.students.map((student) => (
                            <li key={student.id}>{student.name}</li>
                        ))
                    }
                </ul>


                2️⃣3️⃣4️⃣5️⃣6️⃣
            </div>
        );
    }
}

export default LifeComp;
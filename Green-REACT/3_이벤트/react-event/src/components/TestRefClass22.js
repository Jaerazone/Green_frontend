import React, { Component } from 'react';

class TestRefClass22 extends Component {
    constructor(props) {
        super(props);

        //레퍼런스를 만들기 위한 리액트 내장함수
        //레퍼런스명 = React.createRef();
        this.colorInput = React.createRef();
        this.changeColorInput = () => {
            if(this.colorInput) this.colorInput.current.style.backgroundColor = 'red';
        }
    }
/*
    2. React.createRef
    <input에서 ref를 만나고
    14번줄로 이동
    
*/
    render() {
        return (
            <div>
                
                <h1>React.createRef 2번째방법</h1>
                <input 
                    type="text" 
                    ref={this.colorInput}
                />
                <button onClick={this.changeColorInput}>색을 바꿉니다</button>

            </div>
        );
    }
}

export default TestRefClass22;
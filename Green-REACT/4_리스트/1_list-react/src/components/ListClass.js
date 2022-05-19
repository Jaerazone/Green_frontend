// class 컴포넌트로 작성 리스트
import React, { Component } from 'react';

class ListClass extends Component {
    constructor(props) {
        super(props);
        // 값을 배열로 받아옴
        this.numbers = ["봄", "여름", "가을", "겨울"];
        // map을 통해서 동일한 컴포넌트 또는 엘리먼트에 넣어서 새로운 배열로 저장
        this.listItems = this.numbers.map((number, index) => <li key={index}>{number}</li>);
        this.state = {
            season : // 배열값을 사용 해줄때는 키 값을 위한 id 값을 추가
            [       // [배열로 받을건데,] {값이여러개라 그안은 또 객체로}
                { id : 1, text : '봄'},
                { id : 2, text : '여름'},
                { id : 3, text : '가을'},
                { id : 4, text : '겨울'},
            ],
            // 값을 받아올 값(text와 id)
            inputId : 5, 
            inputText : '', 
            // 작성된 value값을 버튼을 눌렀을때 여기에 넣고, 
            // push나 concat을 통해서 배열에 추가하기로함
            students : 
            [
                { id : 1, name : '홍길동'},
                { id : 2, name : '성춘향'},
                { id : 3, name : 'Jaera'}
            ]
        };
    }
    /*
    실습문제 1) deleteSeason 함수를 들고와서 클래스형에서 사용할수 있도록 수정
    //onClick에 들어가는 이벤트는 동일하게 작성
    */
    deleteSeason = (id) => {
        const nextSeason = this.state.season.filter((s) => s.id !== id)
        // 클래스형에서는 setState를 통해서 값을 수정한다.
        console.log(this.nextSeason);
        this.setState({ season : nextSeason });
    };



    // 바뀐 값을 가져오는 함수
    // setState()를 사용할 때는 항상 {(state에 작성한 속성이름):값} 으로 넣어준다
    // 값 : 1 , "문자열", 변수로 넣어둔 값
    changeText = (e) => this.setState( {[e.target.name] : e.target.value } );

    // 배열에 값을 넣는 함수
    getText = () => {
        // 아래 값은 state의 값을 직접적으로 바꾸기 때문에 권장하지 않는다
        // this.state.season.push(this.state.inputText);

        // concat을 이용하여 두개의 값이 더한 배열을 만든다.
        const nextSeason = this.state.season.concat({ // 들어갈 값이 객체형태라서 ()안에 {}형식으로 적어줌
            id : this.state.inputId,
            text : this.state.inputText 
        });
        this.setState({season : nextSeason});
        // prevState를 통해 this.state
        this.setState((prevState) => ({ inputId: prevState.inputId + 1 }));
    }    

    render() {
        const { season, students } = this.state; //season이라는애를 state에서 구조화 할당을해서 들고옴 (값이 여러개일때는 구조화할당으로 들고온다)
        const listSeason = season.map(s => <li key={s.id}>{s.text}</li> )
        // season이 배열이기때문에 map함수를 이용해서 안에 값들을 출력하도록함 
        // 동일한 컴포넌트 또는 엘리먼트에 넣어서 새로운 배열(listSeason)로 저장
        
        return (
            <div>
                <h1> 5️⃣ input 배열추가 </h1>
                <input type="text" name="inputText" onChange={this.changeText} />
                <button onClick={this.getText} >추가</button>
                
                <h1>🔳클래스 컴포넌트</h1>
                <ul>{season[0].text}</ul>
                <br></br>
                <ul>{listSeason}</ul>

                <h3>🤔실습문제(클릭시id전달 삭제)</h3>
                <ol>
                    {season.map((s) => 
                        ( <li 
                            key={s.id}
                            onClick={()=>{this.deleteSeason(s.id)}}
                            >
                            {s.text}
                            </li> ))}
                </ol>
                
                <h3>🔳테이블 이용</h3>
{/*  map 사용법
1. const로 변수에 넣어 사용한다
2. 한번만 사용하는 경우 ol 태그처럼 중괄호 안에 넣어서 사용한다
*/}
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td>이름</td>
                        </tr>
                        {students.map((s) => (   // 여러줄로 작성할때 ()묶어서 return으로 보냄
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                            </tr>))}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default ListClass;
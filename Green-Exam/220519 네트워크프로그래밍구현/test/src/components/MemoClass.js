import React, { Component } from 'react';

class MemoClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            memos : [
                { id : 1 , text : '내용'},
                { id : 2 , text : '메모를만들었습니다'},
            ],
            inputId : 3,
            inputText : '',
        }
        this.changeText = this.changeText.bind(this);
        this.getText = this.getText.bind(this)
    }
    changeText = (e) => this.setState( {[e.target.name] : e.target.value} )

    getText = () => {        
        const nextMemo = this.state.memos.concat({
            id : this.state.inputId,
            text : this.state.inputText,
        })
        console.log(nextMemo);
        this.setState( {memos : nextMemo} );
        this.setState((prevState) => ({inputId : prevState.inputId+1 }))
    }

    deleteText = (id) => {
        const nextMemo = this.state.memos.filter( (memo) => id !== memo.id)
        this.setState( {memos : nextMemo})
        //클릭한놈 id를 들고와서
        //memos의 id꺼랑 비교해서 똑같은거제외하고 나머지꺼 배열로nextMemo에 저장
        // setState로 nextMemo배열 새로 저장함
    }

    render() {
        const { memos } = this.state;
        const listMemo = memos.map((s) => 
            ( <li key={s.id}>{s.text}<button className='x_btn' onClick={()=> {this.deleteText(s.id)}} >X</button></li> ) )

        return (
            <div className='notes'>
                <h1 className='title'>
                    <span className='span'>💛💚💙🧡</span>
                    NOTES
                </h1>
                <div className='write'>
                    <input type="text" name="inputText" onChange={this.changeText} placeholder="메모를 입력해주세요" />
                    <button className='add_btn' onClick={this.getText} >추가</button>
                    <ul>
                        {listMemo}                    
                    </ul>
                </div>
            </div>
        );
    }
}

export default MemoClass;
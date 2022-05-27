import React from 'react';
// styled-components 를 가져오기 위해 import함
import styled, {css} from 'styled-components';
import {lighten} from 'polished';


// 컴포넌트의 이름으로 사용
// styled를 통해서 원하는 태그와 컴포넌트 수정
// 태그 : styled.a
// 컴포넌트 : styled(MyButton)
const MyButton = styled.a`
  /* a는 태그이름, 랜더될 버튼의 css를 수정*/
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: grey;
    border: 2px solid grey;

    //  scss의 문법 사용가능
    &:hover {
        // lignten, darken > 이것을 사용하기 위해서는 polished 패키지 설치후 사용가능
        
        //background: ${lighten(0.1, "red")}
        background: darkblue;
        
    }

    /* primary button  
    * props의 primary의 값이 들어왔을때 아래 css 추가*/
    ${(props) =>
    props.primary &&
    css`
        background: white;
        color: black;
    `}
`;


// App.js에서 primary가 적혀있다면 불린값으로 trun, 스타일이 실행되고,
// 안적혀있다면 false이기때문에 기본 스타일만 실행된다
const StyleComp = ({primary}) => {
    return (
        <div>
            <MyButton>styled-components 컴포넌트 작성</MyButton>
            <MyButton primary={primary} >styled-components 컴포넌트 작성</MyButton>
        </div>
    );
};

export default StyleComp;

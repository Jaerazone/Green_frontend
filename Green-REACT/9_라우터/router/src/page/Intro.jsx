import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Intro = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    // searchParams : router v6 부터 추가됨
    const num = searchParams.get("num");
    const username = searchParams.get("username");
    return (
        <div>
            <h1>Intro 페이지입니다</h1>
            <p>간단한 소개를 하려고합니다</p>
            <p>쿼리스트링 : {location.search}</p>
            <p> useSearchParams : {num} </p>
            {/* http://localhost:3000/intro?num=1  ?물음표와 키num =1value넣어주면확인가능 */}

            {/* 주소로 intro?username=green 이 들어왔을때 */}
            {/* 아래에 환영합니다가 출력되고 그외에는 출력이 되지않게 JSX로 작성 */}
            {location.search === `?username=green` ? (
                <p>(백틱사용) 환영합니다</p>
            ) : null}

            {username === "green" ? <p>(키/value사용) 환영</p> : null}
            {/* && : ? 대신에 && 연산자 사용하면 참일때 뒤에 작성한 태그 출력*/}
            {/* || : ? 대신에 || 연산자 사용하면 */}
            {/*         거짓(값이 없을때)일때 뒤에 작성한 태그를 출력한다 */}
            {username === "green" && <p>(&&연산자) 환영</p>}
            {username === "green" || <p>(||연산자) 환영</p>}

            <br />
            <p>
                쿼리스트링이란? <b>URL의 뒤에 입력 데이터를 함께 제공</b>하는
                가장 단순한 데이터 전달 방법이다. <br />
                웹개발에서 데이터를 요청하는 방식 중 대표적인 것이 GET방식과
                POST방식인데, <br />
                주로 <b>GET방식으로 데이터를 요청</b>할 때 쓰이는 방법이다.{" "}
                <br />
                key1=value1&key2=value2...방식으로 데이터를 요청한다 <br />
                <b>'데이터를 넘길 때 주소창을 이용해 넘기는 방법'</b>
            </p>

            <Link to="/">홈</Link>
        </div>
    );
};

export default Intro;

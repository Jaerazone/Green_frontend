import { PropTypes } from "prop-types";

// 화살표 함수로 만드는 컴포넌트
// 모듈로 내보내기 위해 ArrowComponent에 담아서 내보낸다
const ArrowComponent = (props) => { 
    const { name, children } = props;
    // 이렇게 적어주면 porps.name, props.children 이라고 안적고 
    // name, childen으로 바로 적어서 사용가능하다 , 
    // 이러한 것을 비구조화 할당 문법을 통해 
    // props의 내부값을 추출하여 사용
    return <div>
        {/* props.children을 통해서 vue의 슬롯같이 값을 사용할 수 있다 */}
        <p style = { {color : 'yellow' } }>{children}</p>
        <p> {name} </p>
        <h2 style = { {color : 'red' } }>화살표 함수로 만든 컴포넌트입니다</h2>
        </div>
 };
 
 // App.js에서 값을 적어주지 않으면 
 // 아래 name이 기본값으로 들어가진다
 ArrowComponent.defaultProps = {
     name : '기본이름',
 } 
ArrowComponent.propTypes = {
    name : PropTypes.string
}
 export default ArrowComponent;
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const ConterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateToProps = (state) => ({
    number: state.counter.number,
});
const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        dispatch(increase()); // dispatch({type:INCREASE}) > useReduce
        console.log("+");
    },
    decrease: () => {
        dispatch(decrease());
    },
});

// store로 가져온 리덕스 모듈(리듀서함수)를 컨테이너 컴포넌트와 연결함
// connect를 통해서 store로 가져온 리덕스 모듈과
// mapStateToProps(state), mapDispatchToProps(dispatch) 를 연결해준다.
// 위와 같은 형태를 고정해서 사용.
export default connect(mapStateToProps, mapDispatchToProps)(ConterContainer);

// redux-saga를 이용하여 1초뒤에 값이 증가하는 비동기 함수 만들기
// redux-saga에서 delay, put 함수를 가져옴

import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
// Every 모든액션실행, Latest 가장마지막으로 디스패치된내용을 실행

const INCREASE = "counter/INCREASE";
const DECREASE = "coutner/DECREASE";
const SETDIFF = "coutner/SETDIFF";
const DIFF = "coutner/DIFF";
// 비동기를 위한 액션 이름 추가
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

// 액션 함수 : 액션에 들어갈 값이 바뀔 때 쉽게 사용하기 위함

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SETDIFF, payload: diff });
export const onDiff = () => ({ type: DIFF });
// 비동기를 위한 액션 생성 함수
export const increaseAsyne = () => ({ type: INCREASE_ASYNC });
export const decreaseAsyne = () => ({ type: DECREASE_ASYNC });

// 제너럴 함수 생성
function* increaseSage() {
    // ('redux-saga/effects' 에서 들고옴)
    yield delay(1000); // 1초 기다림
    yield put(increase(1)); // put은 액션을 디스패치해줌
}
function* decreaseSage() {
    yield delay(1000); // 1초 기다림
    yield put(decrease(1));
}

// 작성해준 기능이 들어간 제너럴함수를 어떤식으로 실행할지 내보내는(export)함수
export function* counterSage() {
    // Every 모든액션실행, Latest 가장마지막으로 디스패치된내용을 실행
    yield takeEvery(INCREASE_ASYNC, increaseSage);
    yield takeLatest(DECREASE_ASYNC, decreaseSage);
}

// 초기 상태
const initalState = {
    number: 0,
    diff: 0,
};

// 리듀서 함수 ,상태값을 변화시키는 함수
// 이때 state는 기본값을 넣어서 사용
function counterSageReducer(state = initalState, action) {
    switch (action.type) {
        case INCREASE:
            return { number: state.number + 1 };
        case DECREASE:
            return { number: state.number - 1 };
        case SETDIFF:
            return {
                ...state,
                diff: parseInt(action.payload),
            };
        case DIFF:
            return {
                ...state,
                number: state.number + state.diff,
            };
        default:
            return state;
    }
}

export default counterSageReducer;

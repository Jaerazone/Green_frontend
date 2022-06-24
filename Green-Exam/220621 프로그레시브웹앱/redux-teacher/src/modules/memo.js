// 액션타입 정하기
const CHANG_TITLE = "memo/CHANG_TITLE";
const CHANG_TEXT = "memo/CHANG_TEXT";
const INSERT = "memo/INSERT";
const REMOVE = "memo/REMOVE";

// 액션 함수 작성 >> dispatch때 사용하기위해 export
export const changTitle = (input) => ({
  type: CHANG_TITLE,
  input, // action.input 이라고 작성했을때 그 안의 내용 사용가능
});
export const changText = (input) => ({
  type: CHANG_TEXT,
  input, // action.input 이라고 작성했을때 그 안의 내용 사용가능
});
//INSERT 시에 id 값이 필요
let id = 3;
// title과 text의 값이 객체로 들어옴
export const insert = (memo) => ({
  type: INSERT,
  memo: {
    id: id++,
    title: memo.title,
    text: memo.text,
  },
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 초기 state 값 작성
const initalState = {
  title: "",
  text: "",
  memos: [
    {
      id: 1,
      title: "첫번째",
      text: "첫번째 메모입니다",
    },
    {
      id: 2,
      title: "두번째",
      text: "두번째 메모입니다",
    },
  ],
};

// state 값을 변경하는 reducer 함수 작성
// >> store 사용하기위해 export default
function memo(state = initalState, action) {
  switch (action.type) {
    case CHANG_TITLE:
      return {
        ...state,
        title: action.input,
      };
    case CHANG_TEXT:
      return {
        ...state,
        text: action.input,
      };
    case INSERT:
      return {
        ...state,
        memos: state.memos.concat(action.memo),
      };
    case REMOVE:
      return {
        ...state,
        memos: state.memos.filter((memo) => memo.id !== action.id),
      };
    default:
      return state;
  }
}

export default memo;

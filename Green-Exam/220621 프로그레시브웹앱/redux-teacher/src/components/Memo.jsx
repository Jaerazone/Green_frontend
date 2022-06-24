const MemoItem = ({ memo, onRemove }) => {
  return (
    <div>
      {/**  memo의 title */}
      <span>제목 : {memo.title}</span>
      {/** memo 삭제 - memo의 id 값을 통해서 삭제 */}
      <button
        onClick={() => {
          onRemove(memo.id);
        }}
      >
        X
      </button>
      {/** memo의 text */}
      <p>내용 : {memo.text} </p>
    </div>
  );
};

const Memo = ({ title, text, memos, onChangText, onChangTitle, onInsert, onRemove }) => {
  const memoAdd = () => {
    onInsert({ title: title, text: text });
    onChangText("");
    onChangTitle("");
  };

  return (
    <div>
      <h1>메모하는 공간입니다</h1>
      {/** title 값을 들고오는 input - 입력을 눌렀을때 초기화 */}
      <input
        type="text"
        value={title}
        onChange={(e) => {
          onChangTitle(e.target.value);
        }}
      />{" "}
      <br />
      {/** text 값을 들고오는 input - 입력을 눌렀을때 초기화*/}
      <textarea
        cols="24"
        rows="5"
        value={text}
        onChange={(e) => {
          onChangText(e.target.value);
        }}
      ></textarea>
      <br />
      {/** title과 text값을 전달해서 추가 */}
      <button onClick={memoAdd}>입력</button>
      <hr />
      {/** memos 들고와서 map을 통해 전체 보여줌 : 배열 */}
      {memos.map((memo) => (
        <MemoItem memo={memo} onRemove={onRemove} key={memo.id} />
      ))}
    </div>
  );
};

export default Memo;

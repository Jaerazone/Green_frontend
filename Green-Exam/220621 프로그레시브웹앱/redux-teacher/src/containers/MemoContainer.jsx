import Memo from "../components/Memo";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { changText, changTitle, insert, remove } from "../modules/memo";

const MemoContainer = () => {
  const { title, text, memos } = useSelector((state) => ({
    title: state.memo.title,
    text: state.memo.text,
    memos: state.memo.memos,
  }));

  const dispatch = useDispatch();
  const onChangTitle = useCallback((input) => dispatch(changTitle(input)), [dispatch]);
  const onChangText = useCallback((input) => dispatch(changText(input)), [dispatch]);
  const onInsert = useCallback((memo) => dispatch(insert(memo)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return <Memo title={title} text={text} memos={memos} onChangText={onChangText} onChangTitle={onChangTitle} onInsert={onInsert} onRemove={onRemove} />;
};

export default MemoContainer;

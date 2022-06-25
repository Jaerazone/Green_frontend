import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    // 8️⃣ 트리거 사용해야함, todos를 디스패치로 가져와서 이를 할당할것임
    const dispatch = useDispatch();
    // 지금 할 내용은, , todosList 컴포넌트가 로드되는 즉시, todos배열을 가져오도록 해야함
    // 이걸 수행하려면 useEffect HOOk을 사용해야함
    useEffect(() => {
        dispatch(getTodosAsync());
        console.log("ㅇㅇ");
    }, [dispatch]); // dispatch가 실행될때마다 호출됨

    // useEffect(() => {
    //     dispatch(deleteTodoAsync());
    //     console.log("ㅇㅇ");
    // }, [dispatch]); // dispatch가 실행될때마다 호출됨

    // 이렇게 하면 TodoList컴포넌트가 처음 로드 될때, useEffect 효과로 getTodosAsync()가 실행되고
    // 비동기 작업에 전달해서 업데이트된 useSelector의 todos가 그알림을 받아와
    // 이 컴포넌트안의 요소를 다시 랜더링하도록 하기 때문에 여기컴포넌트에 이내용을 추가한다
    // 이제 npm start해보면, 툴킷state에 저장되어있는 메모가 아닌, (postman에 저장된 api에 저장된) db쪽의 todos가 화면에 나옴

    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    );
};

export default TodoList;

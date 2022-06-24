// createAsyncThunk
// 말 그대로 async 함수를 수행하고,
// 두가지 인자를 받는다 ( aciton type string, callback function )
// action type string 은 slice의 이름을 말함 (여기서는 todoSlice의 이름인 todos)
// const getTodoasync = createAsyncThunk(
//   'todos/getByTodoStatus', // 1. action type string
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data;
//   }
// ) // callback function

// 이렇게 두가지 인자를 받아 async 함수를 실행시키고, promist 결과를 반환한다
// 반환하는 곳은 reducer의 slice 함수에 반환하게됨! 아래 todoSlice에 반환하는거임
// reducers 함수는
// extraReducers: {
//   // 여기에 reducers의 추가작업을 적어준다
//     // 필요에 따라 state 로딩을 핸들링함
//   [getTodoasync.fulfilled]: (state, action) {
//     // 💚💛 Promise의 pending ? fulfilled : rejected의 결과에 따라
//     // 1️⃣ extraReducers의 pending시에 할 function(행동),
//     // 2️⃣ fulfilled시의 function
//     // 3️⃣ rejected시 function 을 나누어 실행 시킬수 있음
//     // /*✨😎한가지 꿀TIP) createAsyncThunk 는 배후에 여러 작업을 발송한다는 것을 기억하셈
//     // 🟠 pending 일때는 보류중인 작업을 발송한다는 것이기 때문에 여기에는 loading spanner 혹은 일부 메세지를 연결하는 등 이부분이 작동하는지 확인하는데 유용함
//     //
//     //
//     // 💥 여기서 주의할 점💥
//     // 💥 firebase같은곳에 login이나 singUp을 서버에 요청하고 Promise를 받는다면
//     // 💥 user info를 담은 promist값이 리턴된다
//     // 💥 이 값들은 많은 정보들을 포함하고 있기 때문에 redux에서 에러를 띄우게 된다.
//     // We've always told Redux users they should not put non-serializable values in the store.
//     // https://velog.io/@zerozoo-front/redux-toolkit-createAsyncThunk-%EC%9D%98-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9%EB%B2%95
//     // 이 링크 참조해서 더 읽어보기

//     // 상태 배열에 사용자 추가
//     state.entities.push(action.payload)
//     }
// }

// // 나중에 App쪽에서 필요에 따라 thunk함수를 dispatch 써줌
// dispatch(getTodoasync(123))

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//7️⃣ export 써줌 .. 이제 트리거 작업해야한다(8️⃣ todos를 가져와야함- todoList가 처음 로드될때 실행되는게 좋으니, TotoList.js로)
export const getTodosAsync = createAsyncThunk(
    "todos/getTodosAsync",
    async () => {
        // 1️⃣여기서는 api의 url을 전달할것임
        const response = await fetch("http://localhost:7000/todos"); // fetch대신 axios.get 사용하면됨! 그러면 json으로 변환할 필요없이 그대로 json형식으로 들어감
        // 2️⃣만약 응답을 제대로 받았다면,
        // json 형식으로 변환하고 todos에 할당해준다
        if (response.ok) {
            const todos = await response.json(); //fetch는 문자열로들어오기때문에 json으로 무조건 받아줘야함!
            return { todos }; // 객체형식으로 반환해줄것임
            // 3️⃣함수가 반환되면, action을 발송할것임
            // 이경우 우리가 반환하는 것이 무엇이든
            // 배열에 포함된 객체는 반환될때마다
            // action.payload가 될것이고, 이것은 액션을 발송하고,
            // todos 는 payload에 있을것이고 이 모든것은 뒤에서 수행됨
            // 4️⃣우리는 이제 action과 thunk를 가지고 있으므로
            // 이 액션을 처리할 레지스터 로직을 구현해야한다!!
        } // 따라서 Slice로 이동해서 reducer 내에서 추가작업을 해줘야함!(아래로이동)
    }
);

// 💌투두 비동기로 추가하기
export const addTodosAsync = createAsyncThunk(
    "todos/addTodosAsync",
    // 1) async로 todos의 타이틀을 가져와야하기때문에 payload를 매개변수로 써주고 action으로 보내버림(콜백)
    async (payload) => {
        // 2) 받아온 payload를 POST 형식으로 보낸다. json 형식이고, payloda.title을 title로 넣어주삼~
        const response = await fetch("http://localhost:7000/todos", {
            // https의 구성을 보내는거임!
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: payload.title }), // postman의 Body임, id는 알아서생성해주고, completed는 false이니깐
        });
        if (response.ok) {
            // 응답을 받았으면 이제 state에 뿌릴거임 응답받은 값을 return으로 받아오삼!
            const todo = await response.json(); // 이번에는 todos배열이 아니고, 안의 객체라서 todo로 받음
            return { todo }; // extra로 payload 보낸거임!
        }
    }
);

export const toggleCompleteAsync = createAsyncThunk(
    // 1)  async로 todos의 complete를 들고와야하기 때문에 payload 매개변수 써주고, action으로 보내버림(콜백~)
    "todos/toggleCompleteAsync",
    async (payload) => {
        const response = await fetch(
            `http://localhost:7000/todos/${payload.id}`,
            {
                method: "PATCH", // PATCH는 객체의 id값을 받아와 객체 안의 데이터 '하나'만 수정해줌
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ completed: payload.completed }),
            }
        );
        if (response.ok) {
            const todo = await response.json();
            return { id: todo.id, completed: todo.completed };
        }
    }
);

export const deleteTodoAsync = createAsyncThunk(
    "todos/deleteTodoAsync",
    async (payload) => {
        const response = await fetch(
            `http://localhost:7000/todos/${payload.id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: payload.id }),
            }
        );
        if (response.ok) {
            const todo = await response.json();
            return { todo };
        }
    }
);

const todoSlice = createSlice({
    name: "todos", // action type
    initialState: [
        {
            id: 1,
            title: "todo1",
            completed: false,
        },
        {
            id: 2,
            title: "todo2",
            completed: false,
        },
        {
            id: 3,
            title: "todo3",
            completed: true,
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.todos.push(newTodo);
            // push 메소드가 array의 새 크기를 반환하기 때문에 초기상태로 새 상태를 푸쉬하면 안되지만
            // 리액트 툴킷의 경우 immer 라이브러리를 사용하기때문에 데이터를 변경하지 않고
            // push() 같은것을 사용할 수 있다 , 아래 링크 참조
            // https://redux-toolkit.js.org/usage/immer-reducers#redux-toolkit-and-immer
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
    //4️⃣ 앞에 action과 thunk를 만들어줬고, 만든임마들을
    // 핸들링 하는 reducer을 이제 만들것임
    extraReducers: {
        //🟠 pending
        [getTodosAsync.pending]: (state, action) => {
            console.log("로딩중 fetching data....");
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            // 5️⃣ thunk이름 . 비동기점
            //  fulfilled : api 호출과 thunk 작업을 완료하고 성공적으로 전달 했음을 의미함
            console.log("로딩완료 fetchded data successfully....");
            return action.payload.todos;
            // getTodosAsync 가 return해준 {todos}가 임마의 action.payload.todos에 들어오는거임
            // return으로 todoSlice의 state값이 업데이트된다!!!!!!!!
            // 6️⃣ 이렇게 return 써주고 이제 thunk를 내보내기만 하면되서
            // 7️⃣ 상단에 올라가서 export 써주면 끝임
        },
        [getTodosAsync.rejected]: (state, action) => {
            // 데이터 가져오기 실패했을때
            console.log("로딩실패 fetchded XXXX");
        },
        // 💌투두 비동기로 추가하기
        [addTodosAsync.fulfilled]: (state, action) => {
            // {todo} 객체 하나 받아옴
            state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            console.log("되는거임?");
            console.log(action.payload);
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

const memoSlice = createSlice({
    name: "memos",
    initialState: [
        {
            id: 1,
            title: "제목임1",
            content: "내용임1",
            completed: false,
        },
        {
            id: 2,
            title: "제목임2",
            content: "내용임2",
            completed: false,
        },
        {
            id: 3,
            title: "제목임33",
            content: "내용임33",
            completed: true,
        },
    ],

    reducers: {
        addMemo: (state, action) => {
            const newMemo = {
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content,
                completed: false,
            };
            state.push(newMemo);
        },
        removeMemo: (state, action) => {
            console.log(action.payload.id);
            return (state = state.filter(
                (item) => item.id !== action.payload.id
            ));
        },
        toggleMemo: (state, action) => {
            const index = state.findIndex(
                (memo) => memo.id === action.payload.id
            );
            console.log(action.payload.id);
            console.log(action.payload.completed);

            state[index].completed = action.payload.completed;
        },

        updateMemo: (state, action) => {
            state.map((item) => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.content = action.payload.content;
                }
            });
        },
    },
});

export const { addMemo, removeMemo, toggleMemo, updateMemo } =
    memoSlice.actions;

export default memoSlice.reducer;

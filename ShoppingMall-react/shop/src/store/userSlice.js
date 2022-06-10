import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: { name: "kim", age: 20 }, //object 자료형
    reducers: {
        changeName(state) {
            state.name = "park";
        },
        addAge(state, action) {
            state.age += action.payload;
        },
    },
});

export const { changeName, addAge } = user.actions;

// const stock = createSlice({
//   name: "stock",
//   initialState: [10, 11, 12],
// });

export default user;

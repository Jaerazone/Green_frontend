import { createSlice } from "@reduxjs/toolkit";

// const user = createSlice({
//     name: "user",
//     initialState: { name: "kim", age: 20 }, //object 자료형
//     reducers: {
//         changeName(state) {
//             state.name = "park";
//         },
//         addAge(state, action) {
//             state.age += action.payload;
//         },
//     },
// });

//export const { changeName, addAge } = user.actions;

// const stock = createSlice({
//   name: "stock",
//   initialState: [10, 11, 12],
// });

const user = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = user.actions;
export const selectUser = (state) => state.user.user;
export default user;

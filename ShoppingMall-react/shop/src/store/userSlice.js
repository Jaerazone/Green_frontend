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

import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";

const user = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logout: (state) => {
            alert("로그아웃 완료");
            auth.signOut();
            localStorage.setItem("user", null);
            console.log(state.user);
        },
    },
});

export const { login, logout } = user.actions;
export const selectUser = (state) => state.user.user;
export default user;

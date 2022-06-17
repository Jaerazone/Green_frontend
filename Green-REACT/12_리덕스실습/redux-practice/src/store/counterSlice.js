import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "counter",
    initialState: { number: 0 },
    reducers: {
        increment(state) {
            state.number += 1;
        },
        decrement(state) {
            state.number -= 1;
        },
        incrementByAmount(state, action) {
            console.log(action);
            console.log(action.payload);
            state.number += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counter.actions;

export default counter;

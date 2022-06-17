import { configureStore } from "@reduxjs/toolkit";
import counter from "./store/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
    },
});

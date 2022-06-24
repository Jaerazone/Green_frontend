import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./memoSlice";

export default configureStore({
    reducer: {
        memos: memoReducer,
    },
});

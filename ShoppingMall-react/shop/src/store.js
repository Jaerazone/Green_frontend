import { configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import cart from "./store/cartSlice";
import foods from "./store/foodsSlice";

export default configureStore({
    reducer: {
        user: user.reducer, // 작명 : user.reducer
        // stock: stock.reducer,
        cart: cart.reducer,
        foods: foods.reducer,
    },
});

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import foods from "./store/foodsSlice";

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "닭가슴살&채소 오리지널 50g", price: 12000, stock: 2 },
    { id: 2, name: "소고기&채소 오리지널 100g", price: 15000, stock: 1 },
  ],
  reducers: {
    stockAdd(state, action) {
      console.log(action.payload);
      console.log(state[0].id);

      // const selectIndex = state.indexOf(action.payload);
      const selectIndex = state.findIndex((ss) => {
        return ss.id === action.payload;
      });
      console.log(selectIndex);
      state[selectIndex].stock += 1;
      //state[a.payload].stock = state[a.payload].stock + 1;
      //console.log(state[a.payload].stock);
    },
    cartAdd(state, action) {
      console.log("cartAdd");
    },
  },
});
export const { stockAdd, cartAdd } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer, // 작명 : user.reducer
    // stock: stock.reducer,
    cart: cart.reducer,
    foods: foods.reducer,
  },
});

import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 }, //object 자료형
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    addAge(state) {
      state.age += 1;
    },
  },
});

export const { changeName, addAge } = user.actions;

// const stock = createSlice({
//   name: "stock",
//   initialState: [10, 11, 12],
// });

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "닭가슴살&채소 오리지널 50g", price: 12000, stock: 2 },
    { id: 2, name: "소고기&채소 오리지널 100g", price: 15000, stock: 1 },
  ],
  reducers: {
    stockAdd(state, a) {
      //console.log(a.payload);
      //console.log(state[1].id);
      state[a.payload].stock = state[a.payload].stock + 1;
      //console.log(state[a.payload].stock);
    },
  },
});
export const { stockAdd } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer, // 작명 : user.reducer
    // stock: stock.reducer,
    cart: cart.reducer,
  },
});

import { createSlice, current } from "@reduxjs/toolkit";

const foods = createSlice({
  name: "foods",
  initialState: [
    {
      id: 0,
      title: "닭가슴살&채소 오리지널 50g",
      content: "화식",
      price: 12000,
    },
    {
      id: 1,
      title: "닭가슴살&빌베리 눈가반짝 100g",
      content: "화식",
      price: 15000,
    },
    {
      id: 2,
      title: "소고기&채소 오리지널 100g",
      content: "화식",
      price: 15000,
    },
  ],
  reducers: {
    foodlistAdd(state, action) {
      console.log(current(state));
      console.log(action.payload);
      return [...current(state), ...action.payload];

      //const newArr = current(...state).concat(action.payload);
      //console.log(newArr);
      //   기존 state에 추가된 거 배열 concat하기
      // const state = [...state, ...action.payload]; // [...foods] foods 벗기고 다시 []로 감싸는 복사본
    },
  },
});

export const { foodlistAdd } = foods.actions;

export default foods;

import { createSlice, current } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, title: "닭가슴살&채소 오리지널 50g", price: 12000, stock: 2 },
        { id: 2, title: "소고기&채소 오리지널 100g", price: 15000, stock: 1 },
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
        addItem(state, action) {
            //id가 같은게 있으면 수량 1증가해주고
            //id같은거 없으며 cart 배열에 추가해주삼
            console.log(action.payload);
            console.log("addItem");
            const selectIndex = state.findIndex(
                (ss) => ss.id === action.payload.id
            );
            if (selectIndex !== -1) {
                state[selectIndex].stock += 1;
            } else {
                state.push({
                    ...action.payload,
                    stock: action.payload.stock + 1,
                });
                console.log(current(state));
            }
        },
        itemDelete(state, action) {
            console.log(action.payload);
            console.log("deleteItem");
            const selectIndex = state.findIndex(
                (ss) => ss.id === action.payload
            );
            console.log(selectIndex);
            state.splice(selectIndex, 1);
        },
    },
});

export const { stockAdd, addItem, itemDelete } = cart.actions;

export default cart;

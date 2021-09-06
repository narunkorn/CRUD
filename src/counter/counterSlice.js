import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,

    },
    reducers: {
        increment: (state) => {
            state.counter = state.counter + 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        reset: (state) => {
            state.counter = 0;
        },
        multiply: (state) => {
            state.counter *= 2;
        },

    },
});

export const { increment, decrement, reset, multiply, } = counterSlice.actions;

export default counterSlice.reducer;
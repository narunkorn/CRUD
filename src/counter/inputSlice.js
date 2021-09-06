import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: "Myinput",
    initialState: {
        input: {
            firstName: '',
            lastName: ''
        }
    },
    reducers: {

        setfirstName: (state, action) => {
            state.input.firstName = action.payload;
        },
        setlastName: (state, action) => {
            state.input.lastName = action.payload;
        }
    },
});

export const { setfirstName, setlastName } = inputSlice.actions;

export default inputSlice.reducer;
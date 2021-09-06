import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        input: {
            serch: '',
            fname: '',
            lname: '',
            username: '',
            email: '',
            avatar: ''
        }
    },
    reducers: {

        setSerch: (state, action) => {
            state.input.serch = action.payload;
        },
        setFname: (state, action) => {
            state.input.fname = action.payload;
        }, setLname: (state, action) => {
            state.input.lname = action.payload;
        }, setUsername: (state, action) => {
            state.input.username = action.payload;
        }, setEmail: (state, action) => {
            state.input.email = action.payload;
        }, setAvatar: (state, action) => {
            state.input.avatar = action.payload;
        },
    },
});

export const { setSerch, setFname, setLname, setUsername, setEmail, setAvatar } = pageSlice.actions;

export default pageSlice.reducer;
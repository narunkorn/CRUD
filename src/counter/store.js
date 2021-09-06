import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import inputReducer from './inputSlice'
import pageReducer from '../MyPage/pageSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        Myinput: inputReducer,
        page: pageReducer

    },
});
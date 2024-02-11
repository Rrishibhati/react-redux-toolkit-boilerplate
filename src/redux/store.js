import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./../home/counterSlice"

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        username : 'rishi cool'
    },
})
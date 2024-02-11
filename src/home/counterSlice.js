import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter : (state, action) => {
            // state contains current value of counterSlice state
            // action contains the payload
            if(action.payload === 'increment') {
                state.count += 1 
            } else {
                state.count -= 1 
            }
        }
    }
})

export const { setCounter } = counterSlice.actions

// here we have predefined typo guideline by redux to remember that export reducer instead of reducers
export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{ count:0 },
    reducers:{
        increament: (state)=>{
            state.count = state.count+1
        },
        decreament: (state)=>{
            state.count = state.count-1
        },
        reset: (state)=>{
            state.count = 0
        },
    }
})


export const {increament,decreament,reset} = counterSlice.actions;



export default counterSlice.reducer;
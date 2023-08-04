import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({

    name :"counter",
    initCount:{count:0},
    reducers:{
        increament :(state)=>{
            state.count = state.count+1
        },
        decreament :(state)=>{
            state.count = state.count-1
        },
        reset :(state)=>{
            state.count = 0
        }
    }
})


export const {increament,decreament,reset} = CounterSlice.actions;



export default CounterSlice.reducer;
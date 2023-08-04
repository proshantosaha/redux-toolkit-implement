import configerStore from "@reduxjs/toolkit"
// import { CounterReducer } from "../Counter/conterSlice"


const store = configerStore({
    reducer:{
        counter:CounterReducer
    }
})

export default store
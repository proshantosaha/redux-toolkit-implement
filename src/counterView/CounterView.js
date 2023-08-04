import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increament,decreament,reset } from '../Counter/counterSlice';


const CounterView = () => {
    const count = useSelector(state=>state.counter.count)
    // console.log(count);

    const dispatch = useDispatch();
  return(
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=>{dispatch(increament())}}>Increment</button>
        <button onClick={()=>{dispatch(decreament())}}>derement</button>
        <button onClick={()=>{dispatch(reset())}}>reset</button>
    </div>
  )
    
}

export default CounterView
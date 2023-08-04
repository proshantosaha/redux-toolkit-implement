import React from 'react'
import {useSelector} from 'react-redux'


const CounterView = () => {
    const count = useSelector(state=>state)
    // console.log(count);
  return(
    <div>
        <h2>Count : 0</h2>
        <button>Increment</button>
    </div>
  )
    
}

export default CounterView
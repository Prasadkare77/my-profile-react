import React, { useReducer, useState } from 'react'

const UseReducerHook =()=> {

    // const [count,setCount] = useState(0)
    const reducer = (count,action) =>{
        switch(action){
            case 'add':
                return count+1;
                break;
            case 'sub':
                return count-1;
                break;
            case 'reset':
                return 0;
                break;
            default:
                break;
        }
    }
    const [count,dispatch] = useReducer(reducer,0)
  return (
    <div>
      <h3>useReducer Hook</h3>
      <p>Count: {count}</p>
      <div>
        <button onClick={()=>dispatch('add')}>Add</button>
        <button onClick={()=>dispatch('sub')}>Substraction</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default UseReducerHook

import React, { useMemo, useState } from 'react'

const UseMemoHook =()=> {

    const [a,setA] = useState(10)
    const [b,setB] = useState(20)

    const [c,setC] = useState(10)
    const [d,setD] = useState(20)
    const result = useMemo(()=>{
        console.log(`Performing Addition of A and B`);
        let sum = 0;
        sum = a + b;
        return sum;
    },[a.b])
  return (
    <div>
      <h2>Use Memo Hook in Functional Comp</h2>
      <p>Addition: {result}</p>
      <button onClick={()=>setA(100)}>Increment</button>
      <button onClick={()=>setB(200)}>Increment B</button>
    </div>
  )
}

export default UseMemoHook

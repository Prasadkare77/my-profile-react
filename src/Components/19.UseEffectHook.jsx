import axios from 'axios'
import React,{useEffect, useState} from 'react'

function UseEffectHook() {
  const [count,setCount] = useState(0)
  const [name, setName] = useState('Ramesh')
  const [product,setProduct] = useState()

  // 1. No dependencies passed
  useEffect(()=>{
    // Called on every render
    console.log(`I am useEffect function called`);
  })

  // 2.An Empty dependency array passed
  useEffect(()=>{
    // Calls only on the first render
    console.log(`Dependancy Array is Empty`);
  },[])

  // Props or state passed to useEffect dependacy array
  useEffect(()=>{
    console.log(`Called on the first render and state or props to useEffect dependacy array is changed`);
  },[name])

  const getProducts = async ()=>{
    const product = await axios.get('');
    console.log(product.data);
  }

  return (
    <div>
      <h2>Use Effect Hook</h2>
      Count:{count} <button onClick={()=>setCount(count+1)}>+</button>
      <br/>
      Name:{name} - <button onClick={()=>setName("Reyansh")}>Change Name</button>
    </div>
  )
}

export default UseEffectHook

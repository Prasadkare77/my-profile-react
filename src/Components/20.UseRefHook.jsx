import React, { useEffect, useRef } from 'react'

const UseRefHooks=()=> {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    })
  return (
    <div>
      <h2>useRef Hooks</h2>
      UserName: <input type='text' ref={inputRef}></input>
    </div>
  )
}

export default UseRefHooks



import React, { useContext } from "react";
import MyContext from "./20.MyContext";

const UseContextHook=()=>{
    const contextValue={
        message:"Hello from the context",
        count:55
    }
    return(
        <>
            <h2>Use Context Hooks</h2>
            <MyContext.Provider value={contextValue}>
                <Child1/>
            </MyContext.Provider>
            
        </>
    )
}
export default UseContextHook;

const Child1 = () =>{
    return(
        <>
            <h2>I am Child 1</h2>
            {/* {JSON.stringify(props.data)} */}
            <Child2/>
        </>
    )
}

const Child2 = () =>{
    return(
        <>
            <h2>I am Child 2</h2>
            <Child3/>
        </>
    )
}

const Child3 = () =>{
    return(
        <>
            <h2>I am Child 3</h2>
            <Child4/>
        </>
    )
}

const Child4 = () =>{
    return(
        <>
            <h2>I am Child 4</h2>
            <Child5/>
        </>
    )
}

const Child5 = () =>{
    const contextData = useContext(MyContext)
    return(
        <>
            <h2>I am Child 5</h2>
            Message: {contextData.message}<br/>
            Count: {contextData.count}
        </>
    )
}


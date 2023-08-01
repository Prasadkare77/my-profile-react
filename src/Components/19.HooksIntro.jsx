import React, {useState} from "react";

// New feature introduced in react 16.8 version - Hooks
// Hooks allows us to use all the class component feature like state, lifecycle

// State - useState
// lifecycle - (componentDidMount, componentDidUpdate) - useEffect
// context  - useContext
// ref - useRef

const HooksIntro =()=>{
    const [name,setName] = useState('Prasad')
    const changeName =() =>{
        this.setName('Sachin')

    }
    return(
        <>
            <h3> Hooks in React Component</h3>
            Name:{name}
            <button onClick={()=>this.setName('Sachin')}>Set</button>
            <button onClick={()=>this.changeName()}>Change</button>
        </>
    )
}
export default HooksIntro
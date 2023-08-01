import React, { useState } from 'react'

const UseStateComp = () => {

    //String State
    const [name, setName] = useState("Prasad")
    const changeName = () => {
        setName("Sachin")
    }

    // Number State
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }

    // Boolean State
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Object state
    const [person, setPerson] = useState({ name: "Prasad", age: 25 })
    const updatePerson = () => {
        setPerson(prePerson => ({...prePerson, name:"Sachin"}))
    }

    // Array state
    const [list,setList] = useState([1,2,3,4,5])
    const updateList = () => {
        setList(preList => ([...preList, 6]))
    }

return (
    <div>
        Name:{name} - <button onClick={changeName}>Change</button>
        <br />
        Count: {count} - <button onClick={() => setCount(count + 1)}>+</button>
        Count: {count} - <button onClick={increaseCount}>+</button>
        <br />
        IsLoggedIn: {isLoggedIn ? 'Yes' : 'No'} - <button onClick={() => setIsLoggedIn(true)}>change</button>
        <br />
        Person: {JSON.stringify(person)}
        Person Name: {person.name}
        Person Age: {person.age}
        <button onClick={updatePerson}>UpdatePerson</button>
        <br />
        List:{list.join(',')} - <button onClick={updateList}>Update</button>

    </div>
)
}

export default UseStateComp

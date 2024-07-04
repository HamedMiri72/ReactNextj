import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react'

const Home = () => {

    //let name = "Hamed";

    const [name, setName] = useState("Hamed")

    const [age, setAge] = useState(31)

    const handleClick = () => {
        setName("janatan")
        setAge(30)
    }

    const handleClickMeAgain = (name, e) => {
        console.log("hello" + name, e.target);
    }
  return (
    <div className="home">
        <h2>Home Page</h2>
        <p>{ name } is { age } years old</p>
        <button onClick={handleClick}>Click me</button>
        
        
    </div>
  )
}

export default Home
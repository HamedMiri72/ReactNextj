import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React from 'react'

const Home = () => {

    const handleClick = (e) => {
        console.log("Hello guys", editableInputTypes);
    }

    const handleClickMeAgain = (name, e) => {
        console.log("hello" + name, e.target);
    }
  return (
    <div className="home">
        <h2>Home Page</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickMeAgain(" hamed", e)}>Click me again</button>
        
    </div>
  )
}

export default Home

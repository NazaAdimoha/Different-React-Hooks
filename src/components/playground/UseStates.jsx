import React, { useState } from 'react'

const UseStates = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
  return (
    <>
         {/* updating the state of an input value */}
         <input type="text" value={inputValue} onChange={handleInputChange} placeholder="enter something..." />
    </>    
  )
}

export default UseStates
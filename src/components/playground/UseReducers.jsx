import React, { useReducer  } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        showKuma: state.showKuma
      }
    
      case "toggleKuma":
        return {
          count: state.count,
          showKuma: !state.showKuma
        }
      default: 

  }
}


const UseReducers = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showKuma: true
  })
  return (
    <div>
        <h3>
          {state.count}
        </h3>
        <button onClick={() => {
          dispatch( {type: "increment"})
          dispatch( {type: "toggleKuma"} )
        }}>
          click here
        </button>
        <p>
          {state.showKuma ? "show kuma" : "hide kuma" && <p>King Naz is here</p>}
        </p>
    </div>
  )
}

export default UseReducers
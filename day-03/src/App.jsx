import { Fragment } from "react"
import React, { useState } from 'react';


const App = () => {
  //js logic 
  const countt = () => setCount (count + 1)
  const [count , setCount ] = useState(0) 
  return (
    <>

    <p>Count :{count}</p>
    <button onClick={countt}>Count</button>
     
    </>
  )
}

export default App
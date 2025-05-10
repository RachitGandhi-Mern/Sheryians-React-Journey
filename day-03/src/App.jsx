import { Fragment } from "react"
import React, { useState } from 'react';


const App = () => {
  //js logic 
  const [count , setCount ] = useState(0) 
  return (
    <>

    <p>Count :{count}</p>
    <button onClick={()=> setCount (count + 1)}>Count</button>
     
    </>
  )
}

export default App
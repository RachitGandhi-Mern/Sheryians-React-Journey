import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [Name, setname] = useState("Rohit");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Name : {Name}</p>
      <button onClick={()=> setname("Rachit")}>Click Here</button>
    </div>
  );
};



export default App;

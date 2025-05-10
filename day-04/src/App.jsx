import React, { useState } from 'react';

const App = () => {
  const profiles = [
    { name: "Rachit", age: 23 },
    { name: "Teena", age: 20 },
    { name: "Unknown", age: 22 }
  ];

  console.log("Profiles array:", profiles); // ✅ Debug

  const updated = profiles.map((profile, index) => {
    console.log("Rendering profile:", profile); // ✅ Debug
    return (
      <li key={index}>
        <div>Name: {profile.name}</div>
        <div>Age: {profile.age}</div>
      </li>
    );
  });

  const [count, setCount] = useState(0);


    //Use state logic
    const[username ,setusername] = useState("Rachit")
    const changeusername= ()=>{
      setusername("Rohit")
    }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ol class= "text-yellow-200">
        {updated}
      </ol>


<div>
  <h1>Username</h1>
  <h2>{username}</h2>
  <button onClick={changeusername}>Change name</button>
</div>
    </>
//Use state jsx
  );
};

export default App;



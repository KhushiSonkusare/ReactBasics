// version 16.8 or later is required for hooks
import React, { useState } from "react";
const Counter = () =>{
    const [count, setCount] = useState(0); // useState is a hook that allows you to add state to functional components, 
    // destructuring the array to get the current count and a function to update it
     // setCount returns a new object with the updated count
     // diff algorithm will compare the previous state with the new state and update the DOM accordingly
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className="btn btn-primary" onClick={() => setCount(count+1) }>
                increment counter</button>
        </div>
    )
}

export default Counter;
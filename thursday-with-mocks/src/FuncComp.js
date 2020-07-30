import React, { useState, useEffect } from 'react';

export function FuncComp() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("____componentDidMount/Update called");
    });
    return (<div>
        <input type="text" placeholder="Name"></input>
        <h1>Hello There!!!</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>);
}
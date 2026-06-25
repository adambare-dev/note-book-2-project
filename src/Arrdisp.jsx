import React, { useState } from 'react'

function Arrdisp() {
    const [names, setNames] = useState([]);
    const [input, setInput] = useState("");

    function addName() {
        if (input.trim() === "") return
        setNames(prev => [...prev, input]);
  
        setInput("");
    };

    return (
        <div>
            <ul>
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button onClick={addName}>addname</button>
                {names.map((name, index) => {
                    return <li key={index}>{name}</li>
                })}
            </ul>
        </div>
    );
};

export default Arrdisp
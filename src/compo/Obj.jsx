import React, { useState } from 'react'
//import './compo/index2.css'
function Obj() {
    const [pData, setPData] = useState([]);
    const [input, setInput] = useState("");

    function addData() {
        if (input.trim() === "") return;
        const newDta = {
            name: input.trim(),
            complited: false,
            id: Date.now()
        };
        setPData(prev => [...prev, newDta]);
        setInput("");

    }
    return (
        <div>
            <ul>
                <input type="text" placeholder='add data'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button onClick={addData}>add data</button>
                {pData.map((data) => {
                    return (<div key={data.id} style={{
                        backgroundColor: 'white',
                        width: '300px',
                        margin: "2rem auto",
                        borderRadius: ".5rem",
                        color: "black",
                        padding: ".2rem"

                    }}>
                        <li style={{ padding: ".5rem 0", listStyleType: "none" }}>
                            Name: {data.name}
                        </li>
                        <p>cimplited: {data.complited ? "Yes" : "No"}</p>
                        <p>ID: {data.id}</p>
                        <input type="checkbox" 
                       style={{background: "green"}}/>
                        <br /><br />
                    </div>
                    )
                })}
            </ul>

            <p>some paragraph</p>
        </div>
    )
}

export default Obj
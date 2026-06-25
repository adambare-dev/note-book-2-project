import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let intervalID = setInterval(() => {
            setTime(new Date());
            //return () => clearInterval(intervalID);
        }, 1000)
    }, []);
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Clock
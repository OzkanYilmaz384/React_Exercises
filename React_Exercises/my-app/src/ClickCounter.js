import React, { useState } from "react";

export function ClickCounter ({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue)


    return (
        <div>
            <h3>Count: {count} </h3>

            <button onClick={() => {
                setCount((c) => c + 1);
            }}>Click Me!
            </button>
        </div>
    )
}


 

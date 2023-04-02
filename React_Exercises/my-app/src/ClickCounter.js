import React, { useEffect, useState } from "react";

export function ClickCounter ({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue)

    useEffect(onCounterChange, [count]);

    function onCounterChange () {
        console.log(`Current count value is : ${count}`);
    }


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


 

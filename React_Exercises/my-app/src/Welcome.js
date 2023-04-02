import React from "react";

export function Welcome (props) {
    return (
        <div>
            {props.name && <p>Welcome, {props.name} </p>}
            {!props.name && <p>Welcome, Stranger!</p>}
        </div>
    )
}



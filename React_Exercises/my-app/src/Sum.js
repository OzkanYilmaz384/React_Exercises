import React from "react";

export function Sum (props) {

   const sum = props.numbers.reduce((a, b) => a + b);

    return (
        <h1> {sum} </h1>
    )
}
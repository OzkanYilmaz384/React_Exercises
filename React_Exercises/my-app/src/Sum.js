import React from "react";

export function Sum ({numbers = [0]}) {

   const sum = numbers.reduce((a, b) => a + b, 0);

    return (
        <h1> {sum} </h1>
    )
}
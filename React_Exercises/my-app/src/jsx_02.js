import React from "react";

let name = "Ozkan";

export const hello = (name) => {
    return <h1>Hello, {name}</h1>
}

hello(name);
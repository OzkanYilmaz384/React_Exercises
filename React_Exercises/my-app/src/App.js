import React, { Component } from "react";
import Hello from "./Hello";
import Message from "./Message";
import { Welcome } from "./Welcome";

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Message />

                <Welcome name={<strong>Ozkan</strong>} age={35} />
            </div>
        )
    }
}

/* If want to pass a prop that contains a JSX expression or anything instead of a string,
    we have to use {}(curly brackets) in place of "".  */



import React, { Component } from "react";
import Hello from "./Hello";
import Message from "./Message";
import { Welcome } from "./Welcome";
// import Age from "./Age";

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Message />

                <Welcome name={<strong>Ozkan</strong>} age={25} />
            </div>
        )
    }
}





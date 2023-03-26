import React, { Component } from "react";
import Hello from "./Hello";
import Message from "./Message";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
// import Age from "./Age";

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Message />
                <Counter initialValue={10} incrementAmount={3} incrementInterval={500} />
                <Welcome name="John" age={15} />
            </div>
        )
    }
}





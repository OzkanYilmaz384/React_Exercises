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
                <Welcome />
            </div>
        )
    }
}

/* If no name prop is passed to the Welcome component, it goes on excuting without name 
or if we set a default value for name, the default value returns whenever we do not set the name. */

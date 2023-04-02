import React, { Component } from "react";

import { Welcome } from "./Welcome";

import Login from "./Login";
import { ClickCounter } from "./ClickCounter";

export default class App extends Component {

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <ClickCounter />

        </div>
            
        )
    }
}





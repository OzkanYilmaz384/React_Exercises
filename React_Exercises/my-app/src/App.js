import React, { Component } from "react";

import { Welcome } from "./Welcome";

import Login from "./Login";

export default class App extends Component {

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <Login />

        </div>
            
        )
    }
}





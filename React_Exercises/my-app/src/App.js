import React, { Component } from "react";

import { Welcome } from "./Welcome";

import { Counter } from "./Counter";
import Login from "./Login";

export default class App extends Component {

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <Counter initialValue={7}/>

            <Login />

        </div>
            
        )
    }
}





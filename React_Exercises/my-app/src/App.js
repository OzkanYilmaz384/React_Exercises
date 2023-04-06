import React, { Component } from "react";

import { Welcome } from "./Welcome";

import { GithubUser } from "./GithubUser";
import { Counter } from "./Counter";

export default class App extends Component {

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <Counter initialValue={12} />

        </div>
            
        )
    }
}





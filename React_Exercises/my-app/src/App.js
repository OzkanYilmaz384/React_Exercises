import React, { Component } from "react";

import { Welcome } from "./Welcome";

import { GithubUser } from "./GithubUser";

export default class App extends Component {

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <GithubUser username="OzkanYilmaz384" />

        </div>
            
        )
    }
}





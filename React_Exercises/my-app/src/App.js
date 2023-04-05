import React, { Component } from "react";

import { Welcome } from "./Welcome";

import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export default class App extends Component {

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <GithubUserList />

        </div>
            
        )
    }
}





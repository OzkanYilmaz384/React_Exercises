import React, { Component } from "react";

import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

export default class App extends Component {

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <ClickCounter initialValue={10} />

        </div>
            
        )
    }
}





import React, { Component } from "react";

import { UnControlledLogin } from "./UnControlledLogin";
import { Colors } from "./Colors";



export default class App extends Component {
    render() {
        return (
            <div>
                <UnControlledLogin />
                <Colors items={["blue", "red", "green", "black"]}/>
            </div>
        )
    }
}





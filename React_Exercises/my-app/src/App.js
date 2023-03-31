import React, { Component } from "react";

import { UnControlledLogin } from "./UnControlledLogin";
import { Colors } from "./Colors";



export default class App extends Component {
    render() {
        return (
            <div>
                <UnControlledLogin />
                <Colors items={[{id: 1, name: "blue"},{id: 2, name: "red"},{id: 3, name: "green"}]}/>
            </div>
        )
    }
}





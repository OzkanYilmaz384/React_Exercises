import { Component } from "react";
import React from "react";

export class Welcome extends Component {
    render() {
        return (
            <p>Welcome, {this.props.name}!</p>
        )
    }
}

Welcome.defaultProps = {
    name : "Yilmaz"
}

/* If no name prop is passed to the Welcome component, it goes on excuting without name 
or if we set a default value for name, the default value (Welcome.defaultProps) returns 
whenever the name prop is passed to the Welcome component. */
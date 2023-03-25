import { Component } from "react";
import React from "react";

export class Welcome extends Component {
    render() {
        return (
            <p>Welcome, {this.props.name}!</p>
        )
    }
}
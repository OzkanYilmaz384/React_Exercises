import { Component } from "react";
import React from "react";
import { Age } from "./Age";

export class Welcome extends Component {
    render() {
        return (
            <div>
                <Age age={this.props.age} />
            </div>
        )
    }
}

Welcome.defaultProps = {
    name : "Yilmaz"
}


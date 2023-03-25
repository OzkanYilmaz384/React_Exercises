import { Component } from "react";
import React from "react";

export class Welcome extends Component {
    render() {
        return (
            <div>
                {this.props.age && <p>Your age is {this.props.age}</p>}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name : "Yilmaz"
}


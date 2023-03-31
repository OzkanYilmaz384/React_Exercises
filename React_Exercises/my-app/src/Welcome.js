import { Component } from "react";
import React from "react";
// import { Age } from "./Age";

export class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                {/* <Age age={this.props.age} /> */}
                <p>Welcome, {this.props.name}</p>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name : "Yilmaz"
}


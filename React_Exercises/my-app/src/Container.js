import { Component } from "react";

export class Container extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="container-title">{this.props.title}</h2>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
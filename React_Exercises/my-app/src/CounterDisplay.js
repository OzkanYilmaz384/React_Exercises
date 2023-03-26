import { Component } from "react";

export class CounterDisplay extends Component {
    render() {
        return <h1>{this.props.count}</h1>
    }
}
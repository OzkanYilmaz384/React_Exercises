import { Component } from "react";


export class CounterButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Click Me!</button>
        )
    }
}
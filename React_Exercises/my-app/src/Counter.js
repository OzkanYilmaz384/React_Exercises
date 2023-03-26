import { Component } from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends Component {
    state = { 
        count: this.props.initialValue,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return ( state.count < 10 * this.props.initialValue
                    ? {count: state.count + this.props.incrementAmount}
                    : {count: this.props.initialValue} )
            })
        }, this.props.incrementInterval)
    }
    render() {
        return (
        <div>
            <h1>Count : {this.state.count}</h1>
            
            <CounterDisplay count={this.state.count} />
        </div>
        )
    }
}
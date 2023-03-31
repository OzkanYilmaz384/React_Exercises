import { Component } from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends Component {
    state = { 
        count: this.props.initialValue,
    }

    // constructor(props) {
    //     super(props)
    componentDidMount(){    // If we use componentDidMount, the constructor is not required.

        this._interval = setInterval(() => {
            this.setState(() => {
                return ( this.state.count < 10 * this.props.initialValue
                    ? {count: this.state.count + this.props.incrementAmount}
                    : {count: this.props.initialValue} )
            })
        }, this.props.incrementInterval)
    }

    // componentWillUnmount() {
    //     if(this._interval) clearInterval(this._interval)
    // }

    render() {

        const MyStyle = {
            color: "red",
            backgroundColor: "aqua",
            margin: "10px"
        }

        return (
        <div style={MyStyle}>
            {this.state.count < 50 && <h1>Count : {this.state.count}</h1>}
            
            <CounterDisplay count={this.state.count} />
        </div>
        )
    }
}
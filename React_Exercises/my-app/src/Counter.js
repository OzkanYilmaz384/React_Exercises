import React from "react";
import { useCounter } from "./useCounter";

export const Counter = ({initialValue = 0}) => {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return(
        <div> 
            <h2>Counter: {counter} </h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

// import { Component } from "react";
// import { CounterDisplay } from "./CounterDisplay";

// export class Counter extends Component {
//     state = { 
//         count: this.props.initialValue,
//     }

//     // constructor(props) {
//     //     super(props)
//     componentDidMount(){    // If we use componentDidMount, the constructor is not required.

//         this._interval = setInterval(() => {
//             this.setState(() => {
//                 return ( this.state.count < 10 * this.props.initialValue
//                     ? {count: this.state.count + this.props.incrementAmount}
//                     : {count: this.props.initialValue} )
//             })
//         }, this.props.incrementInterval)
//     }

//     // componentWillUnmount() {
//     //     if(this._interval) clearInterval(this._interval)
//     // }

//     render() {
//         return (
//         <div>
//             {this.state.count < 50 && <h1>Count : {this.state.count}</h1>}
            
//             <CounterDisplay count={this.state.count} />
//         </div>
//         )
//     }
// }
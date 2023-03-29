import React, { Component } from "react";
// import { CounterButton } from "./CounterButton";
import ClickTracker from "./ClickTracker";


export class ClickCounter extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        count: 0,
     }

    ClickToIncremet = () => {
        this.setState(() => {
            return {
                count: this.state.count + 1
            }
        })
     }

    render() { 
        return ( 
            <div>
                <h3>{this.state.count}</h3>
                {/* <button onClick={this.ClickToIncremet}>Click Me!</button> */}
                <ClickTracker onClick={this.ClickToIncremet} />
            </div>
         );
    }
}
 

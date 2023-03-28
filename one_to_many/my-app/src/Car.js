import { Component } from "react";

export class Car extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    render() { 
        return (
            <div>
                <h1>{this.props.color}</h1>
                <p>{this.props.type}</p>
                <p>{this.props.registration.toString()}</p>
                <p>{this.props.capacity}</p>
            </div>
          );
    }
}
 

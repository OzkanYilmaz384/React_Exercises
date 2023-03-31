import { Component } from "react";

export class Colors extends Component {
    render() {

        
        return (
            
            <ul>
            {this.props.items.map((color, index) => <li key={index}>{color}</li>)}
            </ul>
        )
    }
}
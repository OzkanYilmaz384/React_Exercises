import { Component } from "react";

export class Colors extends Component {
    render() {

        
        return (
            
            <ul>
            {this.props.items.map((color) => <li key={color.id}>{color.name}</li>)}
            </ul>
        )
    }
}
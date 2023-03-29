import { Component } from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends Component {

    state = {
        value: "Somebody",
    }

    handleChange = (event) => {
        this.setState(
            {value: event.target.value }
        )
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <Welcome name={this.state.value} />
            </div>
        )
    }
}
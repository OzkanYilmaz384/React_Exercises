import { Component } from "react";

class ClickTracker extends Component {
   
    state = { 
        lastClicked: "",
     }

    handleClicked = (e) => {
        this.setState({
            lastClicked: e.target.innerText
    })
    }

    render() { /* I have imported and rendered this inside ClickCounter.js */
        return ( 
            <div onClick={this.props.onClick }>  
                <button onClick={this.handleClicked}>Button-1</button>
                <button onClick={this.handleClicked}>Button-2</button>
                <button onClick={this.handleClicked}>Button-3</button>
                <h1>You clicked last : {this.state.lastClicked}</h1>
            </div>
         );
    }
}
 
export default ClickTracker;
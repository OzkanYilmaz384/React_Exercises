import React, { Component } from "react";

import { Welcome } from "./Welcome";
import { Sum } from "./Sum";

export default class App extends Component {

    state = {
        language: "en"
    }
    
    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        })
    }

    render() {
        return (
        <div>
            
            <Welcome name= "Ozkan" />
            <Sum numbers = {[3,5,7,9,11]} />

        </div>
            
        )
    }
}





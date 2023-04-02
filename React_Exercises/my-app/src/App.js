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
            <Sum />

        </div>
            
        )
    }
}





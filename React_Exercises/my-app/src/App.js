import React, { Component } from "react";

import { Welcome } from "./Welcome";

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

        </div>
            
        )
    }
}





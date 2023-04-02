import React, { Component } from "react";

import { UnControlledLogin } from "./UnControlledLogin";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

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
            <select value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="English">ENGLISH</option>
                <option value="Turkish">TURKISH</option>
                <option value="Spanish">SPANISH</option>
            </select>
            <UnControlledLogin />

            <LanguageContext.Provider value= {this.state.language}>
                <DisplayLanguage />
            </LanguageContext.Provider>

        </div>
            
        )
    }
}





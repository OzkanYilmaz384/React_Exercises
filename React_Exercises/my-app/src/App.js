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
                <option value="en">English</option>
                <option value="tr">Turkish</option>
                <option value="sp">Spanish</option>
            </select>
            <UnControlledLogin />

            <LanguageContext.Provider value= {this.state.language}>
                <DisplayLanguage />
            </LanguageContext.Provider>

        </div>
            
        )
    }
}





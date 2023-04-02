import { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends Component {



    render() {
        return (
            <LanguageContext.Consumer>
                {(language) => (
                    <div>
                        <h1>The current language is : {language}</h1>
                    </div>
                )}
            </LanguageContext.Consumer>
        )
    }
}
import { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends Component {



    render() {
        return (
            <LanguageContext.Consumer>
                {(language) => (
                    <div>
                        <p>The current language is : {language}</p>
                    </div>
                )}
            </LanguageContext.Consumer>
        )
    }
}
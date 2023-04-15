import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const DisplayLanguage = () => {

    const language = useContext(LanguageContext)

    return (
        
        <div>
            <h1>The current language is : {language}</h1>
        </div>
            
    )
}
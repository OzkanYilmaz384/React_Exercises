import React, { useState } from "react";

import { Welcome } from "./Welcome";

import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export default function App () {

    const [language, setLanguage] = useState("en");

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="tr">Turkce</option>
            </select>
            <LanguageContext.Provider value={language}>
                <Welcome name= "Ozkan" />
                <DisplayLanguage />
            </LanguageContext.Provider>
            

        </div>
            
    )
}





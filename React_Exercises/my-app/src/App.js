import React from "react";

import { Welcome } from "./Welcome";

import CarDetails from "./CarDetails";

export default function App () {


    return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <CarDetails  initialData={{
              model: "Superb",
              year: 2017,
              color: "white",
            }}/>

        </div>
            
    )
}





import React from "react";

import { Welcome } from "./Welcome";

import { FilteredList } from "./FilteredList";

export default function App () {

    const people = [
        {id: 1, name: "John", age: 15},
        {id: 2, name: "Jeremy", age: 25},
        {id: 3, name: "July", age: 19},
        {id: 4, name: "Joson", age: 17}
    ]

    return (
        <div>
            
            <Welcome name= "Ozkan" />
            
            <FilteredList list={people} />

        </div>
            
    )
}





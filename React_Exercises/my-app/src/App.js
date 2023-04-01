import React, { Component } from "react";

import TodoList from "./TodoList";

export default class App extends Component {
    render() {
        return (
        
            <TodoList 
                render={(items, removeFromList) => items.map((item, index) => (

                    <li key={item + index}>{item} 
                    <button type="button" name="remove" onClick={() => removeFromList(index)}>Remove</button></li>)
                     
                    )}
            />
            
            
        )
    }
}





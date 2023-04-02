import React, { useState } from "react"

export default function TodoList () {

    const [todos, addTodo] = useState(["blue", "red", "green"])

    const addNewTodo = (e) => {
        e.preventDefault();
        addTodo(
            (c) => [...c, e.target.myTodo.value]
        )
    }
    
    return (
        <div>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <form onSubmit={addNewTodo}>
                <input name="myTodo"></input>
                <button >Click to Add!</button>
            </form>
        </div>
    )
}



// import { Component, createRef } from "react"


// class TodoList extends Component {
   
//     state = { 
//       items: ["blue", "red", "green"],
//      }

//     render() { 
//         const inputRef = createRef();

//        const addToList = () => {
//         const item = inputRef.current.value;
//             this.setState({
//                 items: [...this.state.items, item],
//             });
//          }

//         return ( 
//             <div>
//                 <ul>
//                     {this.state.items.map((item) => <li>{item}</li> )}
//                 </ul>
                
//                 <input name="input" type="text" ref={inputRef}></input>
//                 <button onClick={addToList}>Click to Add!</button>
                
//             </div>
//          );
//     }
// }
 
// export default TodoList;
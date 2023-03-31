import { Component, createRef } from "react"


class TodoList extends Component {
   
    state = { 
      items: ["blue", "red", "green"],
     }

    render() { 
        const inputRef = createRef();

       const addToList = () => {
        const item = inputRef.current.value;
            this.setState({
                items: [...this.state.items, item],
            });
            inputRef.current.value = "";
         }

        return ( 
            <div>
                <ul>
                    {this.state.items.map((item, index) => <li key={item + index}>{item}</li> )}
                </ul>
                
                <input name="input" type="text" ref={inputRef}></input>
                <button onClick={addToList}>Click to Add!</button>
                
            </div>
         );
    }
}
 
export default TodoList;
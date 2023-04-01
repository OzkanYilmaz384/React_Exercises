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

         const resetList = () => {
            this.setState({items: []});
         }

         const removeFromList = (deleting) => {
            this.setState({
                items: this.state.items.filter((todo, index) => index !== deleting ),
            })
         }


        return ( 
            <div>
                <input name="input" type="text" ref={inputRef}></input>
                <button onClick={addToList}>Click to Add!</button>
                <button onClick={resetList}>Reset</button>
                
                <ul>
                    {/* {this.state.items.map((item, index) => (

                    <li key={item + index}>{item} 
                    <button type="button" name="remove" onClick={() => removeFromList(index)}>Remove</button></li>)
                     
                    )} */}
                    {this.props.render(this.state.items, removeFromList)}
                </ul>
                
            </div>
         );
    }
}
 
export default TodoList;
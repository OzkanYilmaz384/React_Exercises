import { Component } from "react";
import Hello from "./Hello";
import { Car } from "./Car";

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
  ]
  

class App extends Component {
  
    state = { 
        count: 0,
     }
    render() { 
        return (
            <div>
                <Hello />

                {cars.map((car) => 
                <Car color={car.color} 
                registration={car.registration} 
                type={car.type}
                capacity={car.capacity}
                    />)}

                <div>Number: {this.state.count}</div>
                <button onClick={() => {
                this.setState(() => ({count: this.state.count+1}))
                }}>Click</button>
            </div>
        
        );
    }
}
 
export default App;
import React, { useEffect, useState } from "react"

export function Counter () {
    const [count, setCount] = useState(0);

    function onCounterChange(count)  {
        console.log(`Current count value is : ${count}`);
    }


    useEffect(() => {
        onCounterChange(count);
      }, [count]);
    
    useEffect(() => {
        const i = setInterval(() => {
          console.log("Interval");
        }, 1000);
    
        return () => {
          clearInterval(i);
        };
      }, []);
    
      return (
        <div>
          <button
            onClick={() => {
              setCount(c => c + 1);
            }}
          >
            Click me
          </button>
          <p>You have clicked {count} times</p>
        </div>
      );
    };

// import { Component } from "react";

// export class Counter extends Component {
//     state = {
//         count: 0
//     }

//     constructor(props) {
//         super(props)

//         setInterval(() => {
//             this.setState((state) => {
//                 return {count: this.state.count + 1}
//             })
//         }, 1000)
//     }
//     render() {
//         return <h1>Count : {this.state.count}</h1>
//     }
// }
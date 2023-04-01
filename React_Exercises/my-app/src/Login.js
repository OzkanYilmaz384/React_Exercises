import { Component } from "react";

const onLogin = () => {
        
}

export class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        username: "",
        password: "",
        remember: false,
        login: true
           
     }

    


    handleChanged = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value, 
            login: (this.state.username === "" || this.state.password === "") ? true : false,
        }    
        );   
    }
    

    componentDidUpdate() {
        console.log(this.state);

    }

    render() { 

        const InputStyle = {
            backgroundColor: this.state.password.length < 8 ? "red" : "green",
        }

        return ( 
            <form>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChanged}/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChanged}/>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleChanged}/>
                
                <button type="button" name="login" disabled={this.state.login} onClick={onLogin} style={InputStyle}>Login</button>
            </form>
         );
    }
}
 

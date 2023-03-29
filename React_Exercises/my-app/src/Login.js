import { Component } from "react";

class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        username: "",
        password: "",
        remember: false,
     }

    handleChanged = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() { 
        return ( 
            <form>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChanged}/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChanged}/>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleChanged}/>
            </form>
         );
    }
}
 
export default Login;
import { Component } from "react";


class Login extends Component {
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

    clearForm = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
            login: true
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

                <button type="button" name="login" disabled={this.state.login} onClick={this.props.onLogin}>Login</button>

                <button type="button" name="reset" onClick={this.clearForm}>Clear</button>
            </form>
         );
    }
}
 
export default Login;
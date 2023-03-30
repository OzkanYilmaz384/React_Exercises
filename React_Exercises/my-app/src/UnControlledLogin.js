import { Component, createRef } from "react";

export class UnControlledLogin extends Component {

    userNameRef = createRef();
    passwordRef = createRef();
    rememberRef = createRef();
    submitRef = createRef();

    componentDidMount() {
        this.userNameRef.current.focus();
    }
   
    handleUncontrolledChange = (event) => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log({
            username,
            password,
            remember
        });
    }

    checkLoginButton = () => {
        (this.userNameRef.current.value.length > 0 && this.passwordRef.current.value.length > 0)
        ?  this.submitRef.current.disabled = false
        : this.submitRef.current.disabled = true;
    }

   
    render() {

        return (
            <form onSubmit={this.handleUncontrolledChange} onChange={this.checkLoginButton}>
                <input ref={this.userNameRef} name="username" type="text"/>
                <input ref={this.passwordRef} name="password" type="password"/>
                <input ref={this.rememberRef} name="remember"type="checkbox"/>

                <button ref={this.submitRef} type="submit" disabled>Login</button>
                <button type="reset">Clear</button>
            </form>
        )
    }
}
import { Component } from "react";

export class UnControlledLogin extends Component {
   
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
   
    render() {

        return (
            <form onSubmit={this.handleUncontrolledChange}>
                <input name="username" type="text"/>
                <input name="password" type="password"/>
                <input name="remember"type="checkbox"/>

                <button type="submit">Login</button>
                <button type="reset">Clear</button>
            </form>
        )
    }
}
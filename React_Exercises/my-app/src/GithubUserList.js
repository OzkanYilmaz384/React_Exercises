import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GithubUserList() {

    const [userNames, setUserNames] = useState([])

    const addUserNames = (e) => {
        e.preventDefault();
        setUserNames(users => [...users, e.target.elements.input.value])
        e.target.elements.input.value = ""
    }

    useEffect(() => {
        console.log(userNames);
    }, [userNames])

    return(
        <div>
            <form onSubmit={addUserNames}>
                <input type="text" name="input"></input>
                <button>Add User Name!</button>
            </form>
            {userNames.map((userName, index) => <Link key={userName + index} to={`/users/${userName}`}>{userName}</Link>) }
        </div>
    )
}
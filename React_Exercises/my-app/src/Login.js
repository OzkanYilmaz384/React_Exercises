import React, { useState } from "react"

export default function Login () {

    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    const handleLogin = (e) => {

        const {name, type, value, checked} = e.target
        
            setData({
                ...data,
                [name] : type === "checkbox" ? checked : value,
            })
    }

    return (
        <form>
            <input onChange={handleLogin} name="username" type="text" value={data.username} />
            <input onChange={handleLogin} name="password" type="password" value={data.password} />
            <input onChange={handleLogin} name="remember" type="checkbox" checked={data.remember} />
            <button type="button" name="login">Login</button>
            <button type="reset" name="reset">Reset</button>
        </form>
    )
}


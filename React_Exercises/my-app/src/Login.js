import React, { useEffect, useRef, useState } from "react"

export default function Login () {

    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    const loginRef = useRef();

    useEffect(() => {
        loginRef.current.focus();
    }, [])

    const handleLogin = (e) => {

        const {name, type, value, checked} = e.target
        
            setData({
                ...data,
                [name] : type === "checkbox" ? checked : value,
            })
    }

    return (
        <form>
            <input ref={loginRef} onChange={handleLogin} name="username" type="text" value={data.username} />
            <input onChange={handleLogin} name="password" type="password" value={data.password} />
            <input onChange={handleLogin} name="remember" type="checkbox" checked={data.remember} />
            <button type="button" name="login">Login</button>
            <button type="reset" name="reset">Reset</button>
        </form>
    )
}


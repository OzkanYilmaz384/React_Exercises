import { useState } from "react"

export const useCustomForm = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({
            ...data,
            [name]: value
        })
    }

    return {
        data: data,
        onInputChange: handleChange
    }
}
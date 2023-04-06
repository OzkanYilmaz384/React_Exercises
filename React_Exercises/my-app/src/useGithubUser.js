import { useEffect, useState } from "react";

export const useGithubUser = ({username}) => {
    const [data, setData] = useState(null);

    useEffect( () => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            setData(json);
        })
        
    }, [username] )

    return {
        data: data
    }

}
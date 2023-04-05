import React, { useEffect, useState } from "react"

export function GithubUser({username}) {

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

    
    return(
        <div>
          Login Name: {data && <h3>{data.login}</h3>} ID: {data && <h3> {data.id} </h3>} 
        </div>
    )
}
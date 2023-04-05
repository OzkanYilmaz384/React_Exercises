import React, { useEffect, useState } from "react"

export function GithubUser({username}) {

    const [data, setData] = useState(null);

    useEffect( () => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json);

            setData(json);
        })
        
    }, [username] )

    
    return(
        <div>
          Login Name: {data && <h1>{data.login}</h1>} ID: {data && <h1> {data.id} </h1>} 
        </div>
    )
}
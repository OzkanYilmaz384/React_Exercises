import React from "react"
import { useGithubUser } from "./useGithubUser"



export function GithubUser({username}) {

   const [user, loading, error] = useGithubUser({username})

    
    return(
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>There has been an error</h3>}
            {user && <h3>Login Name: {user.login} ID: {user.id} </h3>}
                    
        </div>
    )
}
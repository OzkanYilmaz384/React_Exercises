import React from "react"
import { useGithubUser } from "./useGithubUser"



export function GithubUser({username}) {

   const {data} = useGithubUser({username})

    
    return(
        <div>
          Login Name: {data && <h3>{data.login}</h3>} ID: {data && <h3> {data.id} </h3>} 
        </div>
    )
}
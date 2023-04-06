import { useEffect, useState } from "react";

export const useGithubUser = ({username}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    async function fetchUser(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUser(data)
        } catch(err) {
            setError(true)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser(username)
    }, [username])

    return [user, loading, error]

}
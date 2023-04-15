import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = ({username}) => {
    
    const {data: user, error, loading} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return [user, loading, error];

}

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = ({username}) => {
    const shouldRequest = username !== null;

    const {data: user, error, loading} = useSWR(shouldRequest 
        ? `https://api.github.com/users/${username}` 
        : null, fetcher);

    return [user, loading, error];
}

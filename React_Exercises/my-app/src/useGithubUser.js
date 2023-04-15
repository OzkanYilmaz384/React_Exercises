import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = ({username}) => {
    const shouldRequest = username !== null;

    const {data: user, error, isValidating, mutate} = useSWR(shouldRequest 
        ? `https://api.github.com/users/${username}` 
        : null, fetcher);

    const loading = !user && !error && isValidating;

    const refetch = () => {
        mutate();
    }

    return [user, loading, error, refetch];
}

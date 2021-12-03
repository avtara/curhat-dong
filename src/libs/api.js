import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function GetApi() {
    return useSWR(
        "https://api.thenewsapi.com/v1/news/top?api_token=ZPu927rAikF9eNSWOvKk9VjBv4tH0exMCrxVp0bI&locale=id&language=id&limit=2",
        fetcher
    );
}
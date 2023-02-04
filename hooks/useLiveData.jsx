import useSWR from "swr";
import axiosFetcher from "../helpers/axiosFetcher.js";

export default function useLiveData(gameId) {
  // TODO: Add interval fetching
  if (gameId) {
    return useSWR(`/api/liveData/${gameId}`, axiosFetcher, {
      refreshInterval: 10000,
    });
  } else {
    return useSWR("/api/liveData", axiosFetcher, { refreshInterval: 10000 });
  }
}

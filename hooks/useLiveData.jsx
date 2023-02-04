import useSWR from "swr";
import axiosFetcher from "../helpers/axiosFetcher.js";

export default function useLiveData(gameId, options) {
  // TODO: Add interval fetching
  if (gameId) {
    return useSWR(`/api/liveData/${gameId}`, axiosFetcher, options);
  } else {
    return useSWR("/api/liveData", axiosFetcher, options);
  }
}

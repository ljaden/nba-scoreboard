import useSWR from "swr";
import axiosFetcher from "../helpers/axiosFetcher.js";

export default function useLiveData(gameId) {
  return useSWR(`/api/boxscore/${gameId}`, axiosFetcher, {
    refreshInterval: 10000,
  });
}

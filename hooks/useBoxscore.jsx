import useSWR from "swr";
import axiosFetcher from "../helpers/axiosFetcher.js";

export default function useBoxscore(gameId, options) {
  if (!gameId) return {};
  return useSWR(`/api/boxscore/${gameId}`, axiosFetcher, options);
}

import useSWR from "swr";
import axiosFetcher from "../helpers/axiosFetcher.js";

export default function useBoxscore(gameId, options) {
  return useSWR(`/api/boxscore/${gameId}`, axiosFetcher, options);
}

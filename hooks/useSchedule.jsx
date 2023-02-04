import useSWR from "swr";
import axiosFetcher from "../helpers/axiosFetcher.js";

export default function useSchedule(date) {
  return useSWR(`/api/schedule/${date}`, axiosFetcher);
}

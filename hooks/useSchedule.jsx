import useSWR from "swr";
import axiosFetcher from "../helpers/axiosFetcher.js";

export default function useSchedule(date, options) {
  return useSWR(`/api/schedule/${date}`, axiosFetcher, options);
}

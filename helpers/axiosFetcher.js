import axios from "axios";

export default async function axiosFetcher(url) {
  const { data } = await axios.get(url);
  return data;
}

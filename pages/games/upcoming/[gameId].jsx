import { useRouter } from "next/router";
import useSWR from "swr";

import Loading from "../../../components/Loading/Loading";

export default function UpcomingPage() {
  const router = useRouter();
  const { gameId } = router.query;

  // const { data, error, isLoading } = useSWR(`/api/liveData/${gameId}`);

  // if (isLoading) {
  // return <Loading />;
  // }

  console.log(gameId);
  return <p>yo</p>;
}

// export async function getServerSideProps(context) {
//   const { gameId } = context.params;
//   //
//   // Fetch data from API
//   // const res = await fetch(
//   //   `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
//   // );
//   const res = await fetch(
//     `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
//   );
//   const data = await res.json();
//
//   return { props: { data } };
// }

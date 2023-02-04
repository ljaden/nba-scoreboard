import { useRouter } from "next/router";
import useLiveData from "../../../hooks/useLiveData";
import useBoxscore from "../../../hooks/useBoxscore";

// component
import Scoreboard from "../../../components/Scoreboard/Scoreboard";
import Loading from "../../../components/Loading/Loading";

export default function() {
  const router = useRouter();
  const { gameId } = router.query;

  const { data, isLoading } = useBoxscore(gameId, {});

  if (isLoading) {
    return <Loading />;
  }

  // handling error response
  if (data.status) {
    return <Loading />;
  }

  return <Scoreboard {...data.game} />;
}

// export async function getServerSideProps(context) {
//   const { gameId } = context.params;
//   // Fetch data from API
//   try {
//     const res = await fetch(
//       `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
//     );
//     const data = await res.json();
//
//     return { props: { data } };
//   } catch (error) {
//     return {
//       props: { error: `There is no data for data on gameId_${gameId}` },
//     };
//   }
// }

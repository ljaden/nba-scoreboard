import { useRouter } from "next/router";
import useLiveData from "../../../hooks/useLiveData";
import useBoxscore from "../../../hooks/useBoxscore";

// component
import Scoreboard from "../../../components/Scoreboard/Scoreboard";

export default function() {
  const router = useRouter();
  const { gameId } = router.query;

  // const { data, error, isLoading } = useLiveData(gameId);
  const { data, error, isLoading } = useBoxscore(gameId);

  if (isLoading) {
    return <p>LOADING.........</p>;
  }

  // console.log(data, "live/");
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="">
      <Scoreboard {...data.game} />
    </div>
  );
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

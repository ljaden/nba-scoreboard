import { useRouter } from "next/router";
// import useLiveData from "../../../hooks/useLiveData";
// import useBoxscore from "../../../hooks/useBoxscore";
import useSWR from "swr";

// component
import Scoreboard from "../../../components/Scoreboard/Scoreboard";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import axiosFetcher from "../../../helpers/axiosFetcher";

export default function LivePage() {
  const router = useRouter();
  const { gameId } = router.query;

  // const { data, isLoading } = useBoxscore(gameId, { refreshInterval: 5000 });

  const { data, error, isLoading } = useSWR(
    `/api/boxscore/${gameId}`,
    axiosFetcher,
    {
      refreshInterval: 5000,
      shouldRetryOnError: false,
    }
  );

  if (isLoading) {
    return <Loading />;
  }
  // handling error response
  if (error) {
    console.log(error, "error");
    return <Error {...error} />;
  }

  // console.log(data, "dfdf");
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

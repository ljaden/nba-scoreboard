import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axiosFetcher from "../../../helpers/axiosFetcher";

// component
import Layout from "../../../components/Layout/Layout";
import Scoreboard from "../../../components/Scoreboard/Scoreboard";
import Loading from "../../../components/Loading/Loading";

export default function LivePage() {
  const router = useRouter();
  const { gameId } = router.query;

  // const { data, error, isLoading } = useSWR(
  //   `/api/boxscore/${gameId}`,
  //   axiosFetcher,
  //   {
  //     refreshInterval: 5000,
  //     shouldRetryOnError: false,
  //   }
  // );

  const { data, isLoading } = useQuery({
    queryKey: ["liveData", gameId],
    queryFn: () => axiosFetcher(`/api/boxscore/${gameId}`),
    refetchInterval: 10000,
  });

  if (isLoading) {
    return <Loading />;
  }
  // // handling error response
  // if (error) {
  //   // console.log(error, "error");
  //   return <Error {...error} />;
  // }

  // console.log(data, "dfdf");
  return <Scoreboard {...data.game} />;
}

LivePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

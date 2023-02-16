import useSWR from "swr";
import axiosFetcher from "../../../helpers/axiosFetcher";

import LiveGame from "./LiveGame";
import Game from "./Game";
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";

export default function Games({
  gameId,
  gameStatusText,
  gameStatus, // 1- not started, 2-in progress, 3-completed
  homeTeam,
  awayTeam,
  broadcasters,
}) {
  const { data: status } = useSWR(`/api/liveData/${gameId}`, axiosFetcher);
  const { data, error, isLoading } = useSWR(
    () => {
      return status[0].gameStatus === 2 ? `/api/boxscore/${gameId}` : null;
    },
    axiosFetcher,
    {
      refreshInterval: 5000,
      shouldRetryOnError: false,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (status && status[0]?.gameStatus !== 2) {
    // if (status[0].gameStatus === 2) {
    console.log(status[0]);
    // }
    return (
      (
        <Game
          gameId={gameId}
          gameStatus={gameStatus}
          gameStatusText={gameStatusText}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          broadcaster={broadcasters.nationalTvBroadcasters[0]}
        />
      ) || <Loading />
    );
  }

  return <>{data && <LiveGame {...data.game} />}</>;
}

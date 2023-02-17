import { useQuery } from "@tanstack/react-query";
import axiosFetcher from "../../../helpers/axiosFetcher";

import LiveGame from "./LiveGame";
import Game from "./Game";
import Loading from "../../Loading/Loading";

export default function Games({
  gameId,
  gameStatusText,
  gameStatus, // 1- not started, 2-in progress, 3-completed
  homeTeam,
  awayTeam,
  broadcasters,
}) {
  const { data } = useQuery({
    queryKey: ["liveData", gameId],
    queryFn: () => axiosFetcher(`/api/boxscore/${gameId}`),
    refetchInterval: (data) =>
      !data || (data.gameStatus === 2 ? 5000 : undefined),
    retry: false,
  });
  return data ? (
    <LiveGame {...data.game} />
  ) : (
    <Game
      gameId={gameId}
      gameStatus={gameStatus}
      gameStatusText={gameStatusText}
      homeTeam={homeTeam}
      awayTeam={awayTeam}
      broadcaster={broadcasters.nationalTvBroadcasters[0]}
    />
  );
  // ) || <Loading />
  // );
  // }

  // return <>{data && (<LiveGame {...data.game} /> || <Loading />)}</>;
}

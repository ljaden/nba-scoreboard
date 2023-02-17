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
  const { data: status } = useQuery({
    queryKey: ["gameStatus", gameId],
    queryFn: async () => {
      const status = await axiosFetcher(`/api/liveData/${gameId}`);
      return status[0];
    },
  });
  const liveStatus = status?.gameStatus === 2;

  const { data, isLoading } = useQuery({
    queryKey: ["liveData", gameId],
    queryFn: () => axiosFetcher(`/api/boxscore/${gameId}`),
    refetchInterval: 10000,
    enabled: !!liveStatus,
    retry: false,
  });

  if (!liveStatus) {
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

  return <>{data && (<LiveGame {...data.game} /> || <Loading />)}</>;
}

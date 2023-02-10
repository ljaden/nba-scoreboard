import { useGlobalDateContext } from "../../../context/dateContext";

import useSWR from "swr";
import axiosFetcher from "../../../helpers/axiosFetcher";

import UpcomingGame from "./UpcomingGame";
import LiveGame from "./LiveGame";
import PastGame from "./PastGame";
import Loading from "../../Loading/Loading";

export default function Games({
  gameId,
  gameStatusText,
  gameStatus, // 1- not started, 2-in progress, 3-completed
  homeTeam,
  awayTeam,
  broadcasters,
}) {
  const { dateFormatted, currentDateFormatted } = useGlobalDateContext();

  const { data, error, isLoading } = useSWR(
    dateFormatted === currentDateFormatted ? `/api/boxscore/${gameId}` : null,
    axiosFetcher,
    { refreshInterval: 5000, shouldRetryOnError: false }
  );

  if (isLoading) return <Loading />;

  if (gameStatus === 3) {
    return (
      <PastGame
        gameId={gameId}
        gameStatusText={gameStatusText}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />
    );
  }

  return (
    <>
      {data ? (
        <LiveGame {...data.game} />
      ) : (
        <UpcomingGame
          gameId={gameId}
          gameStatusText={gameStatusText}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          broadcaster={broadcasters.nationalTvBroadcasters[0]}
        />
      )}
    </>
  );
}

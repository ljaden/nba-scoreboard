import { useGlobalDateContext } from "../../../context/dateContext";

import useSWR from "swr";
import axiosFetcher from "../../../helpers/axiosFetcher";

import UpcomingGame from "./UpcomingGame";
import LiveGame from "./LiveGame";
import PastGame from "./PastGame";

export default function Games({
  gameId,
  gameStatusText,
  gameStatus, // 1- not started, 2-in progress, 3-completed
  homeTeam,
  awayTeam,
}) {
  const { date, dateFormatted, currentDate, currentDateFormatted, dispatch } =
    useGlobalDateContext();

  const { data, error, isLoading, mutate } = useSWR(
    dateFormatted === currentDateFormatted ? `/api/boxscore/${gameId}` : null,
    { refreshInterval: 5000, shouldRetryOnError: false }
  );

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
        <LiveGame {...data} />
      ) : (
        <UpcomingGame
          gameId={gameId}
          gameStatusText={gameStatusText}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
        />
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import moment from "moment";

//component
import Team from "./Team/Team";
import Periods from "./Periods/Periods";
import PlayerStats from "./PlayerStats/PlayerStats";

import useSWR from "swr";
import { playbyplay } from "../../helpers/api";

export default function Scoreboard({
  gameId,
  gameCode,
  gameStatus,
  gameStatusText,
  period,
  homeTeam,
  awayTeam,
}) {
  const [displayHome, setDisplayHome] = useState(true);
  const [playByPlay, setPlayByPlay] = useState([]);

  useEffect(() => {
    async function getPbP(gameId) {
      const res = await fetch(`/api/playbyplay/${gameId}`);
      const data = await res.json();

      setPlayByPlay(data.slice(-5).reverse());
    }

    getPbP(gameId);
  }, [gameId, homeTeam.score, awayTeam.score, gameStatusText]);
  if (gameStatus === 1) {
    /*
     * gameStatus code
     * 1 - didn't start yet
     * 2 - game in process
     * 3 - event completed
     */
    return (
      <div>
        <p>GAME HASNT BEGAN YET</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="w-full border border-black text-center text-2xl">
        {gameStatusText}
      </div>
      <div className="grid grid-2 sm:grid-cols-2">
        <Team {...homeTeam} isHome={true} />
        <Team {...awayTeam} />
      </div>

      <Periods
        homeTeamPeriods={homeTeam.periods}
        homeTeamTri={homeTeam.teamTricode}
        awayTeamPeriods={awayTeam.periods}
        awayTeamTri={awayTeam.teamTricode}
        period={period}
      />

      <PlayerStats
        players={displayHome ? homeTeam.players : awayTeam.players}
        displayHome={displayHome}
        setDisplayHome={setDisplayHome}
        homeTeamName={homeTeam.teamTricode}
        awayTeamName={awayTeam.teamTricode}
      />

      <p>PLAYBYPLAY</p>
      {playByPlay.map((play) => (
        <p key={play.actionNumber}>
          {gameClock(play.clock)} {play.description}
        </p>
      ))}
    </div>
  );
}

export function gameClock(duration) {
  const momentDuration = moment.duration(duration);
  const formattedDuration =
    momentDuration.minutes().toString().padStart(2, "0") +
    ":" +
    momentDuration.seconds().toString().padStart(2, "0");
  return formattedDuration;
}
// https://cdn.nba.com/headshots/nba/latest/260x190/203999.png

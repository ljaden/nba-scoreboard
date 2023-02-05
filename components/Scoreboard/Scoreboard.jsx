import Image from "next/image";
import { useState, useEffect } from "react";

//component
import Team from "./Team/Team";
import Periods from "./Periods/Periods";
import PlayerStats from "./PlayerStats/PlayerStats";

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
    </div>
  );
}
// https://cdn.nba.com/headshots/nba/latest/260x190/203999.png

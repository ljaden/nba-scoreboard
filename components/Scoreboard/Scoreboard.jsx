import { useState, useEffect } from "react";
import moment from "moment";

//component
import Team from "./Team/Team";
import Periods from "./Periods/Periods";
import PlayerStats from "./PlayerStats/PlayerStats";

import useSWR from "swr";
import { playbyplay } from "../../helpers/api";

export default function Scoreboard({
  arenaName,
  gameDateTimeEst,
  gameId,
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
    return (
      <div>
        <div className="w-full border border-black text-center p-2">
          <span className="capitalize">
            {formatDateTimeStr(gameDateTimeEst)} {gameStatusText}
          </span>
        </div>
        <div className="grid sm:grid-cols-2">
          <Team {...homeTeam} isHome={true} gameStatus={gameStatus} />

          <Team {...awayTeam} gameStatus={gameStatus} />
        </div>
        {arenaName && (
          <div className="w-full border border-black text-center p-2">
            <span>Stadium: {arenaName}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="w-full border border-black text-center p-2">
        <span className="">{gameStatusText}</span>
      </div>
      <div className="grid grid-2 sm:grid-cols-2">
        <Team {...homeTeam} isHome={true} />
        <Team {...awayTeam} />
      </div>

      <Periods
        homeTeamId={homeTeam.teamId}
        homeTeamPeriods={homeTeam.periods}
        homeTeamTri={homeTeam.teamTricode}
        awayTeamId={awayTeam.teamId}
        awayTeamPeriods={awayTeam.periods}
        awayTeamTri={awayTeam.teamTricode}
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
    </>
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

export function formatDateTimeStr(dtString) {
  const momentDT = moment(dtString);
  const formattedDTstr = momentDT.format("dddd, MMM D ");

  return formattedDTstr;
}
// https://cdn.nba.com/headshots/nba/latest/260x190/203999.png

import { useState } from "react";
import moment from "moment";

//component
import Team from "./Team/Team";
import Periods from "./Periods/Periods";
import PlayerStats from "./PlayerStats/PlayerStats";
import PlayByPlay from "./PlayByPlay/PlayByPlay";

export default function Scoreboard({
  arena,
  arenaName,
  arenaState,
  arenaCity,
  gameId,
  gameStatus,
  gameStatusText,
  homeTeam,
  awayTeam,
}) {
  const [displayHome, setDisplayHome] = useState(true);

  return (
    <>
      <div className="w-full border border-black text-center p-2">
        <span className="capitalize">{gameStatusText}</span>
      </div>
      <div className="grid grid-2 sm:grid-cols-2">
        <Team {...homeTeam} isHome={true} gameStatus={gameStatus} />
        <Team {...awayTeam} gameStatus={gameStatus} />
      </div>
      <div className="w-full border border-black text-center p-2 flex flex-col justify-center">
        {/* Play by Play */}
        {gameStatus === 2 ? (
          <PlayByPlay gameId={gameId} gameStatusText={gameStatusText} />
        ) : (
          <p>
            {arena?.arenaName ?? arenaName}, {arena?.arenaCity ?? arenaCity},{" "}
            {arena?.arenaState ?? arenaState}
          </p>
        )}
      </div>

      {gameStatus !== 1 && (
        <>
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
        </>
      )}
    </>
  );
}

export function formatDateTimeStr(dtString) {
  const momentDT = moment(dtString);
  const formattedDTstr = momentDT.format("dddd, MMM D ");

  return formattedDTstr;
}
// https://cdn.nba.com/headshots/nba/latest/260x190/203999.png

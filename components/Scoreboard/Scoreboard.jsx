import Image from "next/image";
import { useState } from "react";

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
  const [displayHomeBoxscore, setDisplayHomeBoxscore] = useState(true);

  if (gameStatus === 1) {
    /*
     * gameStatus code
     * 1 - didn't start yet
     * 2 - game in process
     * 3 - event completed
     */
    return (
      <div>
        <p>GAME HASN"T BEGAN YET"</p>
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
        players={displayHomeBoxscore ? homeTeam.players : awayTeam.players}
      />

      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`}
        onClick={() => setDisplayHomeBoxscore((pre) => !pre)}
      >
        <Image
          src={`/logos/${displayHomeBoxscore ? homeTeam.teamTricode : awayTeam.teamTricode
            }.png`}
          alt="/"
          width={20}
          height={20}
          className="m-auto w-auto h-auto "
        ></Image>
      </button>
    </div>
  );
}
// https://cdn.nba.com/headshots/nba/latest/260x190/203999.png

import Link from "next/link";
import { useGlobalDateContext } from "../../../context/dateContext";

// component
import TeamLogo from "../../TeamLogo/TeamLogo";

export default function Game({
  gameId,
  gameStatus,
  gameStatusText,
  homeTeam,
  awayTeam,
  broadcaster,
}) {
  const { dateFormatted } = useGlobalDateContext();

  return (
    <Link href={`/games/${gameId}?date=${dateFormatted}`}>
      <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-max">
        <div className="text-xs flex justify-between mb-1 items-center relative">
          <span className="mx-auto">{gameStatusText}</span>
          {broadcaster && (
            <span className="text-gray-500 absolute right-0 hidden md:block">
              {broadcaster.broadcasterAbbreviation}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 w-16">
              <TeamLogo teamId={homeTeam.teamId} width={25} height={25} />
              <span
                className={`${homeTeam.score > awayTeam.score ? "font-bold" : ""
                  }`}
              >
                {homeTeam.teamTricode}
              </span>
            </div>
            <span
              className={`flex-none ml-16 ${homeTeam.score > awayTeam.score ? "font-bold" : ""
                } ${gameStatus === 1 ? "invisible" : ""}`}
            >
              {homeTeam.score}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-16">
              <TeamLogo teamId={awayTeam.teamId} width={25} height={25} />
              <span
                className={`${awayTeam.score > homeTeam.score ? "font-bold" : ""
                  }`}
              >
                {awayTeam.teamTricode}
              </span>
            </div>
            <span
              className={`flex-none ml-16 ${awayTeam.score > homeTeam.score ? "font-bold" : ""
                } ${gameStatus === 1 ? "invisible" : ""}`}
            >
              {awayTeam.score}
            </span>
          </div>
        </div>
      </li>
    </Link>
  );
}

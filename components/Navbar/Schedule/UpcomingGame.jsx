import Link from "next/link";

// context
import { useGlobalDateContext } from "../../../context/dateContext";

// component
import TeamLogo from "../../TeamLogo/TeamLogo";

export default function UpcomingGame({
  gameId,
  gameStatusText,
  homeTeam,
  awayTeam,
  broadcaster,
}) {
  const { dateFormatted } = useGlobalDateContext();

  return (
    <Link href={`/games/upcoming/${gameId}?date=${dateFormatted}`}>
      <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-max">
        <div className="text-xs flex justify-between mb-1 items-center relative">
          <span className="mx-auto">{gameStatusText}</span>
          {broadcaster && (
            <span className="text-[.5rem] text-gray-500 absolute right-0">
              {broadcaster.broadcasterAbbreviation}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 w-16">
              <TeamLogo teamId={homeTeam.teamId} width={25} height={25} />
              <span className="grow">{homeTeam.teamTricode}</span>
              <span className="text-[.5rem] text-gray-500 self-start mt-1">
                ({homeTeam.wins}-{homeTeam.losses})
              </span>
            </div>
            <span className="flex-none ml-16 invisible">{homeTeam.score}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 w-16">
              <TeamLogo teamId={awayTeam.teamId} width={25} height={25} />
              <span className="grow">{awayTeam.teamTricode}</span>
              <span className="text-[.5rem] text-gray-500 self-start mt-1">
                ({awayTeam.wins}-{awayTeam.losses})
              </span>
            </div>
            <span className="flex-none ml-16 invisible">{awayTeam.score}</span>
          </div>
        </div>
      </li>
    </Link>
  );
}

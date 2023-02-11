import Image from "next/image";
import Link from "next/link";

// component
import TeamLogo from "../../TeamLogo/TeamLogo";

export default function PastGame({
  gameId,
  gameStatusText,
  homeTeam,
  awayTeam,
}) {
  return (
    <Link href={`/games/${gameId}`}>
      <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-max">
        <div className="text-xs flex">
          <span className="ml-auto text-gray-500">{gameStatusText}</span>
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
                }`}
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
                }`}
            >
              {awayTeam.score}
            </span>
          </div>
        </div>
      </li>
    </Link>
  );
}

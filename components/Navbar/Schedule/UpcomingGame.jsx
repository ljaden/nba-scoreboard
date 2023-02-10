import Image from "next/image";
import Link from "next/link";

export default function UpcomingGame({
  gameId,
  gameStatusText,
  homeTeam,
  awayTeam,
  broadcaster,
}) {
  return (
    <Link href={`/games/upcoming/${gameId}`}>
      <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-max">
        <div className="text-sm flex my-2">
          <span className="mx-auto">{gameStatusText}</span>
          {broadcaster && (
            <span className="text-xs text-gray-500">
              {broadcaster.broadcasterAbbreviation}
            </span>
          )}
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col gap-2">
          <div className="flex gap-1 justify-center items-center">
            <Image
              src={`/logos/${homeTeam.teamTricode}.png`}
              width={35}
              height={35}
              alt="/"
            ></Image>
            <div className=" grid grid-flow-row auto-rows-min">
              <span className="hidden sm:block text-xs text-gray-500">
                {homeTeam.wins}-{homeTeam.losses}
              </span>
              <span>{homeTeam.teamTricode}</span>
            </div>
          </div>

          <div className="flex gap-1 justify-center items-center">
            <Image
              src={`/logos/${awayTeam.teamTricode}.png`}
              width={35}
              height={35}
              alt="/"
            ></Image>
            <div className=" grid grid-flow-row auto-rows-min">
              <span className="hidden sm:block text-xs text-gray-500">
                {awayTeam.wins}-{awayTeam.losses}
              </span>
              <span>{awayTeam.teamTricode}</span>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}

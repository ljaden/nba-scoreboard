import Image from "next/image";
import Link from "next/link";

export default function LiveGame({
  gameId,
  gameStatus,
  gameStatusText,
  homeTeam,
  awayTeam,
}) {
  return (
    <Link href={`/games/live/${gameId}`}>
      <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-min">
        <div className="text-xs flex justify-between">
          {gameStatus === 2 && (
            <Image src={`/live.png`} width={15} height={15} alt="/"></Image>
          )}
          <span className="ml-auto capitalize">{gameStatusText}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 w-16">
              <Image
                src={`https://cdn.nba.com/logos/nba/${homeTeam.teamId}/primary/L/logo.svg`}
                width={25}
                height={25}
                alt="/"
                className="flex-none"
              ></Image>
              <span className="grow">{homeTeam.teamTricode}</span>
            </div>
            <span
              className={`ml-16 ${homeTeam.score > awayTeam.score ? "font-bold" : ""
                }`}
            >
              {homeTeam.score}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-16">
              <Image
                src={`https://cdn.nba.com/logos/nba/${homeTeam.teamId}/primary/L/logo.svg`}
                width={25}
                height={25}
                alt="/"
                className="flex-none"
              ></Image>
              <span className="grow">{awayTeam.teamTricode}</span>
            </div>
            <span
              className={`ml-16 ${homeTeam.score < awayTeam.score ? "font-bold" : ""
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

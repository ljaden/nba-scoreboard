import Image from "next/image";
import Link from "next/link";

// component
import TeamLogo from "../../TeamLogo/TeamLogo";

export default function LiveGame({
  gameId,
  gameStatus,
  gameStatusText,
  homeTeam,
  awayTeam,
}) {
  return (
    // <Link href={`/games/live/${gameId}`}>
    <Link href={`/games/live/${gameId}`}>
      <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-min">
        <div className="text-xs flex justify-between">
          {gameStatus === 2 && (
            <Image src={`/live.svg`} width={15} height={15} alt="/"></Image>
          )}
          <span className="ml-auto capitalize">{gameStatusText}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 w-16">
              <TeamLogo teamId={homeTeam.teamId} width={25} height={25} />
              <span className="grow">{homeTeam.teamTricode}</span>
            </div>
            <span
              className={`ml-16 ${homeTeam.score > awayTeam.score ? "font-extrabold" : ""
                }`}
            >
              {homeTeam.score}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-16">
              <TeamLogo teamId={awayTeam.teamId} width={25} height={25} />
              <span className="grow">{awayTeam.teamTricode}</span>
            </div>
            <span
              className={`ml-16 ${homeTeam.score < awayTeam.score ? "font-extrabold" : ""
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

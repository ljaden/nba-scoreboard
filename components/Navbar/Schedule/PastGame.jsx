import Image from "next/image";
import Link from "next/link";

export default function PastGame({
  gameId,
  gameStatusText,
  homeTeam,
  awayTeam,
}) {
  return (
    <Link href={`/games/${gameId}`}>
      <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-min">
        <div className="text-xs flex justify-between">
          <span className="ml-auto">{gameStatusText}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 w-16">
              <Image
                src={`/logos/${homeTeam.teamTricode}.png`}
                width={25}
                height={25}
                alt="/"
                className="flex-none"
              ></Image>
              <span className="grow">{homeTeam.teamTricode}</span>
            </div>
            <span className="flex-none ml-16">{homeTeam.score}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-16">
              <Image
                src={`/logos/${awayTeam.teamTricode}.png`}
                width={25}
                height={25}
                alt="/"
                className="flex-none"
              ></Image>
              <span className="grow">{awayTeam.teamTricode}</span>
            </div>
            <span className="flex-none ml-16">{awayTeam.score}</span>
          </div>
        </div>
      </li>
    </Link>
  );
}

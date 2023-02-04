import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import useSchedule from "../../../hooks/useSchedule";

export default function Scheduled({ date }) {
  const { data, error, isLoading } = useSchedule(date);

  // console.log(data, "Scheduled");
  if (isLoading) return <p>LOADING...</p>;

  return (
    <div className="pt-8">
      <ul className="flex sm:flex-col gap-2 overflow-auto">
        {data.games.map((game) => (
          <Link href={`/games/${game.gameId}`} key={game.gameId}>
            <li className="border border-black my-1 pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-min">
              <div className="text-xs text-right mr-2">
                {game.gameStatusText}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2 w-16">
                    <Image
                      src={`/logos/${game.homeTeam.teamTricode}.png`}
                      width={25}
                      height={25}
                      alt="/"
                      className="flex-none"
                    ></Image>
                    <span className="grow">{game.homeTeam.teamTricode}</span>
                  </div>
                  <span className="flex-none ml-16">{game.homeTeam.score}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 w-16">
                    <Image
                      src={`/logos/${game.awayTeam.teamTricode}.png`}
                      width={25}
                      height={25}
                      alt="/"
                      className="flex-none"
                    ></Image>
                    <span className="grow">{game.awayTeam.teamTricode}</span>
                  </div>
                  <span className="flex-none ml-16">{game.awayTeam.score}</span>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

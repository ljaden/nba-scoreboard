import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import useLiveData from "../../../hooks/useLiveData";

// components
import Loading from "../../Loading/Loading";

export default function Live() {
  const { data, error, isLoading } = useLiveData(null, {
    refreshInterval: 5000,
  });

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <div className="pt-8">
      <ul className="flex sm:flex-col gap-2 overflow-auto">
        {data.scoreboard.games.map((game) => (
          <Link href={`/games/live/${game.gameId}`} key={game.gameId}>
            <li className="border border-black pr-4 pl-4 pb-4 pt-1 hover:bg-red-300 whitespace-nowrap min-w-min  bg-[#ecf0f3]">
              <div className="text-xs text-gray-500 text-right">
                {/* {game.gameStatus === 2 ? ( */}
                {/*   <span className="rounded-full bg-green-800 p-1">LIVE</span> */}
                {/* ) : ( */}
                {/*   " " */}
                {/* )} */}
                <small>{game.gameStatusText}</small>
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
                  <span className={`flex-none ml-16`}>
                    {game.homeTeam.score}
                  </span>
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

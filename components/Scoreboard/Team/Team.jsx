import Image from "next/image";

import { useEffect, useState } from "react";

export default function Team({
  teamId,
  teamName,
  teamCity,
  teamTricode,
  wins,
  losses,
  score,
  isHome,
}) {
  // state score color transition
  const [color, setColor] = useState("text-white");

  useEffect(() => {
    setColor("text-lime-400");

    console.log(`${score} ${teamTricode} ${color}`);
    //
    const timeoutID = setTimeout(() => {
      setColor("white");
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [score]);

  return (
    <div
      className={`min-w-full py-6 px-4 flex ${isHome ? "" : "sm:flex-row-reverse"
        } justify-between items-center font-extrabold text-white ${teamTricode}-color`}
    >
      <div
        className={`flex ${isHome ? "" : "sm:flex-row-reverse"
          } gap-2 items-center`}
      >
        <span className="w-max">
          <Image
            src={`/logos/${teamTricode}.png`}
            alt="/"
            width={50}
            height={50}
          ></Image>
        </span>
        <div className="flex flex-col">
          {wins ? (
            <small>
              {wins}-{losses}
            </small>
          ) : (
            <small></small>
          )}
          <span className="text-2xl">{teamCity}</span>
          <span className="text-2xl leading-4">{teamName}</span>
        </div>
      </div>
      <div>
        <span
          className={`text-4xl transition-colors duration-700 ease-in-out transform ${color}`}
        >
          {score}
        </span>
      </div>
    </div>
  );
}

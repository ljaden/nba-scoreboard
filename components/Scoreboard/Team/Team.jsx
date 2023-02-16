import { useEffect, useState } from "react";

// component
import TeamLogo from "../../TeamLogo/TeamLogo";

export default function Team({
  teamId,
  teamName,
  teamCity,
  teamTricode,
  wins,
  losses,
  score,
  isHome,
  gameStatus,
}) {
  // console.log(gameStatus, "team.jsx");
  // state score color transition
  const [color, setColor] = useState("text-white");

  useEffect(() => {
    setColor("text-lime-400 text-5xl");

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
        } justify-between items-center text-white ${teamTricode}-color`}
    >
      <div
        className={`flex ${isHome ? "" : "sm:flex-row-reverse"
          } gap-4 items-center justify-evenly`}
      >
        <TeamLogo teamId={teamId} width={60} height={60} />

        <div className="flex flex-col items-center">
          {wins && (
            <span className="text-sm">
              ({wins}-{losses})
            </span>
          )}
          <span className="text-3xl font-bold text-center">{teamCity}</span>
          <span className="text-3xl font-bold text-center">{teamName}</span>
        </div>
      </div>
      <span
        className={`${gameStatus === 1 ? "hidden" : ""
          } text-4xl font-extrabold transition-colors duration-700 ease-in-out transform ${color}`}
      >
        {score}
      </span>
    </div>
  );
}

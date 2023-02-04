import Image from "next/image";

export default function Team({
  teamId,
  teamName,
  teamCity,
  teamTricode,
  wins,
  losses,
  score,
  periods,
  isHome,
}) {
  // console.log(periods);

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
        <span className="text-4xl">{score}</span>
      </div>
    </div>
  );
}

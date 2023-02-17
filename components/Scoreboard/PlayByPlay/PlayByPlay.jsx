import { useState, useEffect } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

// import useSWR from "swr";
// import axiosFetcher from "../../../helpers/axiosFetcher";

import moment from "moment";

import TeamLogo from "../../TeamLogo/TeamLogo";
import { useQuery } from "@tanstack/react-query";
import axiosFetcher from "../../../helpers/axiosFetcher";

export default function PlayByPlay({ gameId, gameStatusText }) {
  const [autoRefresh, setAutoRefresh] = useState(false);

  // const { data, error, isLoading } = useSWR(
  //   autoRefresh ? `/api/playbyplay/${gameId}` : null,
  //   axiosFetcher,
  //   { refreshInterval: gameStatusText === "Half" ? null : 5000 }
  // );
  //

  const { data } = useQuery({
    queryKey: ["playbyplay", gameId, autoRefresh],
    queryFn: () => axiosFetcher(`/api/playbyplay/${gameId}`),
    refetchInterval: 5000,
    enabled: autoRefresh,
  });
  const [pbp, setPbp] = useState([]);

  useEffect(() => {
    setPbp(data?.slice(-5).reverse());
  }, [data, autoRefresh]);

  return (
    <div className="">
      <div className="flex gap-2 justify-center items-center">
        <span className="text-2xl font-bold">PLAY BY PLAY</span>
        <button
          className={`${""}`}
          onClick={() => setAutoRefresh((pre) => !pre)}
        >
          {autoRefresh ? <FaPlay /> : <FaPause />}
        </button>
        <span>{autoRefresh ? "on" : "off"}</span>
      </div>

      {pbp &&
        pbp.map((play) => (
          <div key={play.actionNumber} className="flex my-2">
            {<TeamLogo teamId={play.teamId} width={25} height={25} />}
            <span
              className={`${play?.shotResult === "Made" ? "font-bold" : ""}`}
            >
              {gameClock(play.clock)} {play.description}
            </span>
          </div>
        ))}
    </div>
  );
}

export function gameClock(duration) {
  const momentDuration = moment.duration(duration);
  const formattedDuration =
    momentDuration.minutes().toString().padStart(2, "0") +
    ":" +
    momentDuration.seconds().toString().padStart(2, "0");

  return formattedDuration;
}

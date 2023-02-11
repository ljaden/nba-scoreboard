import { useState, useEffect } from "react";

import useSWR from "swr";
import axiosFetcher from "../../../helpers/axiosFetcher";

import moment from "moment";

import { playbyplay } from "../../../helpers/api";

export default function PlayByPlay({ gameId, gameStatusText }) {
  const [autoRefresh, setAutoRefresh] = useState(true);

  const { data, error, isLoading } = useSWR(
    autoRefresh ? `/api/playbyplay/${gameId}` : null,
    axiosFetcher,
    { refreshInterval: 5000 }
  );
  const [pbp, setPbp] = useState([]);

  useEffect(() => {
    setPbp(data.slice(-5).reverse() ?? data);
  }, [gameId, data]);

  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <p className="text-2xl font-bold">PLAY BY PLAY</p>
        <button
          className="border border-black rounded-full p-2"
          onClick={() => setAutoRefresh((pre) => !pre)}
        >
          AutoRefresh
        </button>
        <span>{autoRefresh ? "on" : "off"}</span>
      </div>

      {pbp.map((play) => (
        <div key={play.actionNumber} className="my-2">
          <span className="">
            {gameClock(play.clock)}
            {"   "}
            {play.description}
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

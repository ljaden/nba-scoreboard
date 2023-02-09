import Link from "next/link";
import Image from "next/image";

// import { useGlobalDateContext } from "../../../context/dateContext";
import useSchedule from "../../../hooks/useSchedule";

// components
import Loading from "../../Loading/Loading";
import Games from "./Games";

export default function Schedule({ date }) {
  const { data, error, isLoading } = useSchedule(date);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pt-8">
      <ul className="flex sm:flex-col gap-2 overflow-auto">
        {data.games.map((game) => {
          return <Games key={game.gameId} {...game} />;
        })}
      </ul>
    </div>
  );
}

import useSchedule from "../../../hooks/useSchedule";

// components
import Loading from "../../Loading/Loading";
import Games from "./Games";

export default function Schedule({ date }) {
  const { data, error, isLoading } = useSchedule(date);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="pt-8">
      <ul className="flex sm:flex-col gap-2 overflow-auto">
        {data ? (
          data.games.map((game) => {
            return <Games key={game.gameId} {...game} />;
          })
        ) : (
          <p className="mx-auto font-bold text-lg">No Games</p>
        )}
      </ul>
    </div>
  );
}

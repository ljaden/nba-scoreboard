import { useQuery } from "@tanstack/react-query";
import axiosFetcher from "../../../helpers/axiosFetcher";

// components
import Loading from "../../Loading/Loading";
import Games from "./Games";

export default function Schedule({ date }) {
  // fetch game schedule dependent of date prop
  const { data, isLoading, isError } = useQuery({
    queryKey: ["schedule", date],
    queryFn: () => axiosFetcher(`/api/schedule/${date}`),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>isError</p>;
  }

  return (
    <div className="pt-8">
      <ul className="flex md:flex-col gap-2 overflow-auto">
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

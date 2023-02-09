import { useRouter } from "next/router";

// component
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function LivePage({ data, error }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <Error message={error} />;
  }

  // console.log(data, "info");
  return <div>{data && <Scoreboard {...data.game} />}</div>;
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json"
  );
  const data = await res.json();

  const paths = data.leagueSchedule.gameDates
    .map((date) =>
      date.games.filter(
        (game) =>
          game.gameStatus === 3 &&
          game.gameId !== "0012200069" &&
          game.gameId !== "0012200070"
      )
    )
    .flat()
    .map((game) => ({
      params: {
        gameId: game.gameId,
      },
    }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { gameId } = context.params;
  // Fetch data from API
  try {
    const res = await fetch(
      `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
    );
    const data = await res.json();

    return { props: { data } };
  } catch (error) {
    return {
      props: { error: `No data found for gameID_${gameId}` },
    };
  }
}

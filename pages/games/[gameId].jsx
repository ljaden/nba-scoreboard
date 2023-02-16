import { getGame } from "../../helpers/api";

import Layout from "../../components/Layout/Layout";

// component
import Scoreboard from "../../components/Scoreboard/Scoreboard";

export default function GamesPage({ data }) {
  return <div>{<Scoreboard {...data.game} />}</div>;
}

export async function getServerSideProps({ query }) {
  const { gameId, date } = query;

  const res = await fetch(
    `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
  );

  // res !== 200, get data from schedule api
  if (!res.ok) {
    const res = await getGame(date, gameId);
    if (!res) {
      console.log("not res");
      return { notFound: true };
    }
    const data = { game: res };

    return {
      props: { data },
    };
  }

  const data = await res.json();

  return { props: { data } };
}

GamesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

import { getGame } from "../../helpers/api";

// component
import Layout from "../../components/Layout/Layout";
import Scoreboard from "../../components/Scoreboard/Scoreboard";

import axiosFetcher from "../../helpers/axiosFetcher";

export default function GamesPage({ data }) {
  return <div>{<Scoreboard {...data.game} />}</div>;
}

export async function getServerSideProps({ query }) {
  const { date, gameId } = query;
  try {
    const data = await axiosFetcher(
      `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
    );
    return { props: { data } };
  } catch (error) {
    const res = await getGame(date, gameId);
    if (!res) {
      return { notFound: true };
    }
    const data = { game: res };

    return {
      props: { data },
    };
  }
}

GamesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

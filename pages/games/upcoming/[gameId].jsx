import { getGame } from "../../../helpers/api";
import Scoreboard from "../../../components/Scoreboard/Scoreboard";

export default function UpcomingPage({ data }) {
  return <Scoreboard {...data} />;
}

export async function getServerSideProps(context) {
  try {
    const { date, gameId } = context.query;

    const data = await getGame(date, gameId);

    return { props: { data } };
  } catch (error) {
    return { props: { data: error.message } };
  }
}

export default function UpcomingPage() {

}

export async function getServerSideProps(context) {
  const { gameId } = context.params;
  //
  // Fetch data from API
  try {
    const res = await fetch(
    //   `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
    // );
    // const data = await res.json();
    //
    // return { props: { data } };
  } catch (error) {
    return {
      props: { error: `There is no data for data on gameId_${gameId}` },
    };
  }
}

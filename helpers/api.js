import axios from "axios";

// * Fetch live scoreboard
export async function liveData() {
  try {
    const { data } = await axios.get(
      "https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json"
    );

    return data;
  } catch (error) {
    return error;
  }
}

// * Fetch availble odds for upcoming games
export async function odds() {
  try {
    const { data } = await axios.get(
      "https://cdn.nba.com/static/json/liveData/odds/odds_todaysGames.json"
    );

    return data;
  } catch (error) {
    return error;
  }
}

// * Fetch boxscore
export async function boxscore(gameId) {
  try {
    const url = `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`;

    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    return error;
  }
}

// * Fetch all teams
export async function teams() {
  try {
    const { data } = await axios.get(
      "https://data.nba.net/prod/v2/2022/teams.json"
    );

    const nbaTeams = data.league.standard.filter(
      (team) => team.isNBAFranchise === true
    );

    return nbaTeams;
  } catch (error) {
    return error;
  }
}

// * Fetch daily schedule of dateParam
export async function schedule(dateParam) {
  // * @params
  // * dateParam[String] consist of date in YYYYMMDD format
  try {
    // assigns dateParam to current date if falsey
    if (!dateParam) {
      const date = new Date();
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);

      const formattedDate = `${year}${month}${day}`;

      dateParam = formattedDate;
    }

    const { data } = await axios.get(
      "https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json"
    );

    const schedule = data.leagueSchedule.gameDates.find((i) => {
      const date = new Date(i.gameDate);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);

      const formattedDate = `${year}${month}${day}`;

      return formattedDate === dateParam;
    });

    return schedule;
  } catch (error) {
    return error;
  }
}

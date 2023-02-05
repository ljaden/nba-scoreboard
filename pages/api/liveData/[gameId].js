import { liveData } from "../../../helpers/api";

/**
 *  * GET - /api/liveData/:gameId
 **/

export default async function handler(req, res) {
  const { gameId } = req.query;

  const data = await liveData();

  const filtered = data.scoreboard.games.filter(
    (game) => game.gameId === gameId
  );

  return res.status(200).json(filtered);
}

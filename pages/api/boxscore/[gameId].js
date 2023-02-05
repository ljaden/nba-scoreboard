import { boxscore } from "../../../helpers/api";

/**
 *  * GET - /api/boxscore/:gameId
 **/

export default async function handler(req, res) {
  const { gameId } = req.query;

  const data = await boxscore(gameId);

  res.status(200).json(data);
}

import { boxscore } from "../../../helpers/api";

/**
 *  * GET - /api/boxscore/:gameId
 **/

export default async function handler(req, res) {
  const { gameId } = req.query;

  try {
    const data = await boxscore(gameId);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

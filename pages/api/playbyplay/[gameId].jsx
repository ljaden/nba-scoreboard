import { playbyplay } from "../../../helpers/api";

/**
 *  * GET - /api/playbyplay/:gameId
 **/

export default async function handler(req, res) {
  const { gameId } = req.query;

  const data = await playbyplay(gameId);

  const filtered = data.game.actions;

  return res.status(200).json(filtered);
}

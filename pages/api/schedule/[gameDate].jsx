import { schedule } from "../../../helpers/api.js";

/**
 *  * GET - /api/schedule/:gameDate
 **/

export default async function handler(req, res) {
  const { gameDate } = req.query;

  const dailySchedule = await schedule(gameDate);
  res.status(200).json(dailySchedule);
}

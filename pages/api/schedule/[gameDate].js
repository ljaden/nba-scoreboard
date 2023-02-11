import { schedule } from "../../../helpers/api.js";

/**
 *  * GET - /api/schedule/:gameDate
 **/

export default async function handler(req, res) {
  const { gameDate } = req.query;

  try {
    const dailySchedule = await schedule(gameDate);
    res.status(200).json(dailySchedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

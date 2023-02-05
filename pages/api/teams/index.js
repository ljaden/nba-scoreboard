import { teams } from "../../../helpers/api";

/**
 *  * GET - /api/teams
 **/

export default async function handler(req, res) {
  const data = await teams();

  return res.status(200).json(data);
}

import { teams } from "../../../helpers/api";

/**
 *  * GET - /api/teams
 **/

export default async function (req, res) {
  const data = await teams();

  return res.status(200).json(data);
}

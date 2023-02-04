import { odds } from "../../../helpers/api";

/**
 *  * GET - /api/liveData/odds
 **/
export default async function (req, res) {
  const data = await odds();

  return res.status(200).json(data);
}

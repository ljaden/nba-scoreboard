import { liveData } from "../../../helpers/api";

/**
 *  * GET - /api/liveData
 **/
export default async function handler(_req, res) {
  const data = await liveData();

  return res.status(200).json(data);
}

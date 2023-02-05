import { schedule } from "../../../helpers/api.js";

export default async function handler(req, res) {
  const data = await schedule();
  res.status(200).json(data);
}

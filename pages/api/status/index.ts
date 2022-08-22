import { NextApiRequest, NextApiResponse } from "next";
import { route } from "@/bff/route";
import { getStatus } from "@/bff/handler/status/getStatus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<unknown> {
  return route({
    req,
    res,
    get: getStatus,
  });
}

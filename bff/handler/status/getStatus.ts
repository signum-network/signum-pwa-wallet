import { HandlerFunction } from "@/bff/route";

export const getStatus: HandlerFunction = async (req, res) => {
  res.status(200).json({
    status: "All fine",
    // add more here
  });
};

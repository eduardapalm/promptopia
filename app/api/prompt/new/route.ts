import { connectToDB } from "@utils/database";
import { NextApiRequest, NextApiResponse } from "next/types";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt, userId, tag } = await req.body;

  try {
    await connectToDB();
  } catch (error) {
    console.log(error);
  }
};

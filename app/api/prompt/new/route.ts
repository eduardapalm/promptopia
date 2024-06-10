import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextApiRequest, NextApiResponse } from "next/types";

export const POST = async (req: Request) => {
  const { prompt, userId, tag } = await req.json();

  try {
    if (!prompt || !userId || !tag) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    await connectToDB();

    const newPrompt = new Prompt({
      prompt,
      createdBy: userId,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        error: `Failed to Create a new Prompt. Server Error: ${error}`,
      }),
      { status: 500 }
    );
  }
};

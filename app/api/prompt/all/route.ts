import Prompt from "@models/prompt";
import IPrompt from "../../../../interfaces/IPrompt";
import { connectToDB } from "@utils/database";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const prompts: IPrompt[] = await Prompt.find().populate("createdBy");

    console.log(prompts);

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Failed to Fetch all Prompts. Server Error: ${error}`,
      }),
      { status: 500 }
    );
  }
};

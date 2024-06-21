import IPrompt from "@interfaces/IPrompt";
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req: Request, { params }: { params: any }) => {
  try {
    await connectToDB();

    const prompts: IPrompt[] = await Prompt.find({
      createdBy: params.id,
    }).populate("createdBy");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Failed to Fetch user Prompts. Server Error: ${error}`,
      }),
      { status: 500 }
    );
  }
};

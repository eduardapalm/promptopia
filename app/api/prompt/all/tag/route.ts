import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const tag = url.searchParams.get("tag");

  if (!tag) {
    return new Response(JSON.stringify({ error: "Tag is required" }), {
      status: 400,
    });
  }

  try {
    await connectToDB();

    const prompts = await Prompt.find({
      tag: tag,
    }).populate("createdBy");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Failed to Fetch Prompts by Tag. Server Error: ${error}`,
      }),
      { status: 500 }
    );
  }
};

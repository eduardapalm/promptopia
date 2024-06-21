import Prompt from "@models/prompt";
import IPrompt from "../../../../interfaces/IPrompt";
import { connectToDB } from "@utils/database";
import { DeleteResult } from "mongodb";

export const GET = async (req: Request, { params }: { params: any }) => {
  try {
    await connectToDB();

    const prompt: IPrompt[] = await Prompt.findById(params.id).populate(
      "createdBy"
    );

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Failed to Fetch Prompt. Server Error: ${error}`,
      }),
      { status: 500 }
    );
  }
};

export const PATCH = async (req: Request, { params }: { params: any }) => {
  const { prompt, tag }: IPrompt = await req.json();

  try {
    if (!prompt || !tag) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    await connectToDB();

    const updatedPrompt: IPrompt | null | undefined =
      await Prompt.findByIdAndUpdate(params.id, {
        prompt,
        tag: `#${tag.replace("#", "")}`,
      });

    if (!updatedPrompt) {
      return new Response(
        JSON.stringify({ error: "Failed to Update Prompt." }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(updatedPrompt), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Failed to Update Prompt. Server Error: ${error}`,
      }),
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request, { params }: { params: any }) => {
  try {
    await connectToDB();

    const result: DeleteResult | null = await Prompt.findByIdAndDelete(
      params.id
    );

    if (!result || result.deletedCount < 1) {
      return new Response(
        JSON.stringify({ error: "Failed to Delete Prompt." }),
        {
          status: 404,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Prompt Deleted Successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Failed to Delete Prompt. Server Error: ${error}`,
      }),
      { status: 500 }
    );
  }
};

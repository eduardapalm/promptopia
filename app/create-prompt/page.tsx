"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to Create Prompt. Error: ${response.text()}`);
      }

      router.push("/");
    } catch (error) {
      throw new Error(`Failed to Create Prompt. Error: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </>
  );
};

export default CreatePrompt;

"use client";

import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent, useEffect, Suspense } from "react";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const updatePrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt ID not found!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to Update Prompt. Error: ${response.text()}`);
      }
      router.push("/");
    } catch (error) {
      throw new Error(`Failed to Update Prompt. Error: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (promptId) {
      (async () => {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();

        setPost({
          prompt: data.prompt,
          tag: data.tag,
        });
      })();
    }
  }, [promptId]);

  return (
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

const UpdatePromptPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};
export default UpdatePromptPage;

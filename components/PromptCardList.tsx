"use client";
import IPrompt from "@interfaces/IPrompt";
import IPromptCardList from "../interfaces/props/IPromptCardListProps";
import PromptCard from "./PromptCard";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PromptCardList = (props: IPromptCardList) => {
  const { data, customClass } = props;
  const [promptList, setPromptList] = useState<IPrompt[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = async (selectedTag: string) => {
    try {
      const response = await fetch(
        `/api/prompt/all/tag?tag=${encodeURIComponent(selectedTag)}`
      );

      if (response.ok) {
        const data = await response.json();
        setPromptList(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (prompt: IPrompt) => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };

  const handleDelete = async (prompt: IPrompt) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const currentList = promptList.filter(
            (item) => item._id !== prompt._id
          );
          setPromptList(currentList);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setPromptList(data);
    }
  }, [data]);

  return (
    <div className={`${customClass ?? "mt-16"} prompt_layout`}>
      {promptList?.length > 0 &&
        promptList.map((prompt) => (
          <PromptCard
            key={prompt._id.toString()}
            prompt={prompt}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleTagClick={handleClick}
          />
        ))}
    </div>
  );
};

export default PromptCardList;

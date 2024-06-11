"use client";
import IPromptCardProps from "@interfaces/props/IPromptCardProps";
import Image from "next/image";
import { useState } from "react";

const PromptCard = (props: IPromptCardProps) => {
  const { prompt, handleTagClick } = props;
  const post = prompt;
  const creator = prompt.createdBy;
  const [copied, setCopied] = useState("");

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={creator.image}
            alt="Prompt Creator Image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">{creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={() => {}}>
          <Image
            src={
              copied === post.prompt
                ? "assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            alt="Copy Icon"
            width={15}
            height={15}
            className="object-contain"
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p className="font-inter text-xs blue_gradient cursor-pointer">
        {prompt.tag}
      </p>
    </div>
  );
};

export default PromptCard;

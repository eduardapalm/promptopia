"use client";

import { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";
import IPrompt from "@interfaces/IPrompt";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [promptList, setPromptList] = useState<IPrompt[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const fetchPrompts = async () => {
    const res = await fetch("/api/prompt/all");
    const data = await res.json();
    console.log(data);

    setPromptList(data);
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder="Search for a tag or a username"
          required
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      <PromptCardList data={promptList} />
    </section>
  );
};

export default Feed;

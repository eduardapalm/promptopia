"use client";

import { useEffect, useState } from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import IPrompt from "@interfaces/IPrompt";
import { usePathname, useRouter } from "next/navigation";

const MyProfile = () => {
  const { data: session } = useSession();
  const [promptList, setPromptList] = useState<IPrompt[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await res.json();

      setPromptList(data);
    };
    fetchPrompts();
  }, [session?.user.id]);

  return (
    <Profile
      name="My"
      description="Welcome to your personalized profile page"
      data={promptList}
    />
  );
};

export default MyProfile;

"use client";
import IErrorProps from "@interfaces/props/IErrorProps";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

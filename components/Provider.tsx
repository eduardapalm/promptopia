"use client";

import IProviderProps from "../types/props/IProviderProps";
import { SessionProvider } from "next-auth/react";

const Provider = (props: IProviderProps) => {
  return (
    <SessionProvider session={props.session}>{props.children}</SessionProvider>
  );
};

export default Provider;

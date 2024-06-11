import { Session } from "next-auth";
import { ReactNode } from "react";

export default interface IProviderProps {
  children: ReactNode;
  session?: Session;
}

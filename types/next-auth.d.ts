import NextAuth, { DefaultSession } from "next-auth";
import { ObjectId } from "mongodb"; // Adjust if you're using a different database

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id?: string; // Or the appropriate type for your user IDs (e.g., ObjectId)
    } & DefaultSession["user"];
  }

  interface Profile {
    picture?: string;
  }
}

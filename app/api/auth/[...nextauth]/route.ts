import User from "@models/user";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user?.email });

      if (session.user) session.user.id = sessionUser?._id.toString() || "";

      return session;
    },
    async signIn({ profile }) {
      try {
        if (!profile) return false;

        await connectToDB();

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name?.replaceAll(" ", "").toLowerCase(),
            image: profile.picture,
          });
        } else {
          await User.findOneAndUpdate(
            { email: profile.email },
            {
              image: profile.picture,
              username: profile.name?.replaceAll(" ", "").toLowerCase(),
            }
          );
        }

        return true;
      } catch (err) {
        console.log("Error: ", err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

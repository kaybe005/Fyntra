import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [GitHub],
  callbacks: {
    async session({ session, token }) {
      return session;
    },
  },
  debug: true,
});

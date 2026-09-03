// import NextAuth from "next-auth"
// import { JWT } from "next-auth/jwt";
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook"
// import CredentialsProvider from "next-auth/providers/credentials"


// import backendURL from "~/backendURL"
// export default NextAuth({
//         providers: [
//                 // CredentialsProvider({
//                 //         id: "credentials",
//                 //         name: "Email and Password",
//                 //         credentials: {},
//                 //         type: "credentials",
//                 //         authorize: async (credentials, req) => {
//                 //                 const { email, password } = credentials as {
//                 //                         email: string;
//                 //                         password: string;
//                 //                 };
//                 //                 try {
//                 //                         const res = await backendURL.post(
//                 //                                 `/users/login`,
//                 //                                 {
//                 //                                         email,
//                 //                                         password,
//                 //                                 },
//                 //                         );

//                 //                         return res.data;
//                 //                 } catch (err) {
//                 //                         return null
//                 //                 }
//                 //         },
//                 // }),
//         ],
//         // callbacks: {
//         //         session: async ({ session, token }: any) => {
//         //                 session.user = token.user;
//         //                 return session;
//         //         },
//         //         jwt: async ({ token, user, account, session, trigger }: any): Promise<JWT> => {
//         //                 if (user) token.user = user;
//         //                 if (trigger === "update" && session) {
//         //                         if (session.accessToken) {
//         //                                 token.user.accessToken = session.accessToken;
//         //                         }
//         //                         if (session.accessToken) {
//         //                                 token.user.refreshToken = session.refreshToken;
//         //                         }
//         //                 }
//         //                 return token;
//         //         },
//         // },
//         // session: {
//         //         strategy: "jwt",
//         // },
//         // pages: {
//         //         signIn: "/users/login",
//         // },
// });
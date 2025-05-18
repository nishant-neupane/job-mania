// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         // Your logic here to authenticate user,
//         // e.g., call your backend /login API or DB
//         const res = await fetch("http://localhost:3000/backend_api/login", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             email: credentials.email,
//             password: credentials.password
//           })
//         });
//         const user = await res.json();

//         if (res.ok && user) {
//           return user;
//         }
//         return null;
//       }
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.accessToken = user.accessToken; // or whatever token you get
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.accessToken = token.accessToken;
//       return session;
//     }
//   }
// });

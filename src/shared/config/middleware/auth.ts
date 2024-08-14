// const { auth } = NextAuth(authConfig);
//
// export default auth((req) => {
//   console.log("auth middleware...");
//   const { nextUrl } = req;
//
//   console.log("AUTH:", JSON.stringify(req.auth));
//
//   const isAuthenticated = !!req.auth?.user.login;
//   console.log("Is authenticated", isAuthenticated);
//
//   return isAuthenticated;
//
//   // Если пользователь не авторизован, перенаправляем на страницу входа
//   if (!isAuthenticated) {
//     return Response.redirect(new URL("/", nextUrl));
//   }
// });

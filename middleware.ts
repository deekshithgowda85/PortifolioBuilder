import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect all routes except static files and public routes
    "/((?!_next|static|favicon.ico|public).*)",
  ],
};

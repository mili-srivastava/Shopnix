import { type NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path === "/")
    return NextResponse.redirect(new URL("/theme", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/theme"],
};

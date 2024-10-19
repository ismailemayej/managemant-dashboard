import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/signup"];

const roleBasedPrivateRoutes = {
  customer: [/^\/shipping/, /^\/auth/],
  admin: [/^\/dashboard\/admin/],
  superAdmin: [/^\/dashboard\/superadmin/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedData = null;

  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;

  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard/:page*",
    "/dashboard/admin/:page*",
    "/dashboard/superadmin/:page*",
    "/shipping/:page*",
    "/auth/:page*",
  ],
};

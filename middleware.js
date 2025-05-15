import { NextResponse } from "next/server";
import { auth } from "@/lib/firebase";
import { getAuth } from "firebase/auth";


const protectedRoutes = ["/cart"];

export function middleware(req) {
  const url = req.nextUrl.clone();
  const isProtected = protectedRoutes.includes(url.pathname);
  const token = req.cookies.get("__session"); 

  if (isProtected && !token) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

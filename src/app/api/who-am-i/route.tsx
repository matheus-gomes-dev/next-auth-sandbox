import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  // const session = await getServerSession(authOptions);
  const session = await getServerSession();
  return NextResponse.json({ name: session?.user?.name ?? 'stranger'})
}
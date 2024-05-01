import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/api/auth/signin');
  }
  return <span>You are seeing this if you are authenticated!</span>
}
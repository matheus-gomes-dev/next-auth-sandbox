import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  const name = session?.user?.name;
  return (
    <>
      <div>
        Home
      </div>
      <span>{`Hello ${name ? name : 'stranger'}!`}</span>
    </>
  );
}

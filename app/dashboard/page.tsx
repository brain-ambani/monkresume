import { WelcomeMsg } from "@/components/welcome";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
 
  return (
    <main className="h-screen p-5 bg-gray-100">
      <h1 className=" text-3xl   font-extralight text-indigo-600">
        My Resumes
      </h1>
      <WelcomeMsg/>
      
    </main>
  );
}
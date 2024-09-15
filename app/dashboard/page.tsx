import { WelcomeMsg } from "@/app/dashboard/components/welcome";
import { AddResume } from "@/app/dashboard/components/addResume";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
 
  return (
    <main className="h-screen p-5  sm:px-16 lg:px-44 bg-gray-100">
      <h1 className=" text-3xl   font-extralight text-indigo-600">
        My Resumes
      </h1>
      <WelcomeMsg/>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mt-10">
        <AddResume/>
        
      </div>
      
    </main>
  );
}
import { Hero } from "@/components/hero";


export default function Home() {
  return (
    <main className="h-full w-full fixed bg-gradient-to-b m-auto from-violet-500 to-fuchsia-500">
      <div className="sm:m-4 m-2 sm:p-16 p-8 h-screen rounded-md bg-slate-200">
      <Hero/>
      </div>
    </main>
  );
}

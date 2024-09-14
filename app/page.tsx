import { Hero } from "@/components/hero";


export default function Home() {
  return (
    <main className="h-full w-full fixed bg-gradient-to-b m-auto from-violet-500 to-fuchsia-500">
      <div className="m-4 p-16 h-screen rounded-md bg-slate-200">
      <Hero/>
      </div>
    </main>
  );
}


import Link from "next/link"
import { Button } from "./ui/button"

export const Hero = ()=>{
    return(
        <div className="w-full mx-auto flex flex-col items-center mt-16 p-4">
            <p className="text-muted-foreground text-xl py-1 px-4 bg-white text-violet-500 font-bold shadow-inner rounded-xl mb-2">Introducing</p>
            <p className="text-muted-foreground text-lg"> an AI powered resume builder</p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 ">Monk Resume</h1>
            <p className="text-center text-black font-semibold text-2xl leading-9 mt-2 px-4 max-w-3xl mb-4">
                Your smart and intuitive AI-powered resume builder that helps you craft professional resumes effortlessly. Create a resume that highlights your strengths and aligns perfectly with your career goals. Get started today and make your job application stand out.
            </p>
            <Link href="/dashboard" >
            <Button size='lg' className="bg-violet-500 text-xl font-semibold hover:bg-violet-400">Get Started</Button>
            </Link>
        </div>
    )
}
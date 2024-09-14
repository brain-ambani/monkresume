
import Link from "next/link"
import { Button } from "./ui/button"

export const Hero = ()=>{
    return(
        <div className="w-full mx-auto flex flex-col items-center sm:mt-16 sm:p-4">
            <p className="text-muted-foreground sm:text-xl py-1 px-2 sm:px-4 bg-white text-violet-500 font-bold shadow-inner rounded-lg sm:rounded-xl mb-2">Introducing</p>
            <p className="text-muted-foreground text-lg"> an AI powered resume builder</p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 ">Monk Resume</h1>
            <p className="text-center text-black font-semibold sm:text-2xl sm:leading-9 mt-2 px-4 sm:max-w-3xl mb-4">
                Your smart and intuitive AI-powered resume builder that helps you craft professional resumes effortlessly. 
                {" "}<span className="hidden sm:inline">
                Create a resume that highlights your strengths and aligns perfectly with your career goals. Get started today and make your job application stand out.
                </span>
            </p>
            <Link href="/dashboard" >
            <Button size='lg' className="bg-violet-500 text-xl font-semibold hover:bg-violet-400">Get Started</Button>
            </Link>
        </div>
    )
}
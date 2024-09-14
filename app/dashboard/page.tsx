import { SignedIn, UserButton } from "@clerk/nextjs"

export default function Dashboard (){
    return(
        <div>
            <SignedIn>
                <UserButton/>
            </SignedIn>

            <h2>This is the dashboard</h2>
        </div>
    )
}
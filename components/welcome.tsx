import { currentUser, User } from "@clerk/nextjs/server"

export const WelcomeMsg =async()=>{
    const user = await currentUser()
    // if(!user){
    //     return null;
    // }
    return(
        <p className="text-muted-foreground font-semibold text-xl py-4">Welcome back, <span className="text-violet-500">{user?.firstName}</span> </p>
    )
       
    
}
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";


export const CheckUser = async ()=>{
    const user = await currentUser();
    console.log(user)

    // check for current logged in user
    if (!user){
        return null
    }

    // check if user is in DB
    const loggedInuser = await db.user.findUnique({
        where:{
            clerkUserId: user.id
        }
    })

    // if user is in db, retuen the user
    if(loggedInuser){
        return loggedInuser;
    }

    // create new user if  not in DB
    const newUser = await db.user.create({
        data:{
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email:user.emailAddresses[0].emailAddress
        }
    })

    return newUser
}
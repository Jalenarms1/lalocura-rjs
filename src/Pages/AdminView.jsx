import React, { useEffect, useState } from 'react'
import { SignIn, SignedIn, SignedOut, SignUp, useUser, SignOutButton } from '@clerk/clerk-react'
import Navbar from '../Components/Navbar/Navbar'
import Orders from '../Components/Orders/Orders'


const AdminView = ({signUp}) => {  
    const {user} = useUser()
    const [isVerifiedAdmin, setIsVerifiedAdmin] = useState(true)

    useEffect(() => {
        console.log(user);
        // if (user?.primaryEmailAddress.emailAddress != "tacodelvallelalocura@gmail.com") { 
        //     setIsVerifiedAdmin(false)
        // } else {
        //     setIsVerifiedAdmin(true)
        // }
        
    }, [user])

  return (
    <div className="min-h-screen relative bg-black w-full font-serif flex flex-col items-center pb-20 no-scrollbar gap-5">
        <Navbar isAdminView={true}  />
        <SignedOut>
            {signUp ? <SignUp signInUrl='/admin' signInForceRedirectUrl={"/admin"} forceRedirectUrl={"/admin"}/> : <SignIn signUpUrl="/admin/sign-up" forceRedirectUrl={"/admin"} />}

        </SignedOut>
        <SignedIn>
            {isVerifiedAdmin ? <Orders /> : (
                <div className='p-10 flex justify-center items-center flex-col gap-10 bg-red-600'>
                    <p className='text-center'>You are not authorized to view this content. Please sign out</p>
                    <SignOutButton />
                </div>
            )}
        </SignedIn>
    </div>  
  )
}

export default AdminView

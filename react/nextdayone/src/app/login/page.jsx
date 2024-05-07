
'use client'
import CustomNavbar from "@/components/navbar/page";
import {Button,Input} from "@nextui-org/react";
import Link from "next/link";

const Login = () => {
  return (
  <>

      <div className="flex justify-center ">
      <div className='border border-black m-7 w-72 p-4 '>
          <Input type="email" label="Email" /> <br/>
          <Input type="password" label="Password" /> <br/>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Login
      </Button>
     Don't have an account yet? <Link href="/register">Sign Up</Link>  instead
      </div>
      </div>
      </>
  )
}

export default Login
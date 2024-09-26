import React, { useState } from 'react'
import { signup } from '../Controllers/SignUP';

const SignUPpage:React.FC = () => {
    const [fullName,setFullname] = useState<string>("");
    const [mailAddress,setMailAddress] = useState<string>("");
    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const [message,setMessage] = useState<string>("")

    const changeMsg = (msg:string)=>{
        setMessage(msg);
        setTimeout(()=>{
            setMessage("");
        },2000)
    }

    const handleSend = () =>{
        if(fullName.length>5 && mailAddress.length>10 && username.length>5 && password.length>8 && password.length<=10){
            const info = {
                fullName,
                mailAddress,
                username,
                password
            }
            console.log(info);
            signup(info)
                .then((res)=>{
                    if(res.status===208){
                        changeMsg("🚫 User already exists.")
                    }
                    else{
                        changeMsg("User has been created ✅")
                    }
                    console.log(res.status===208);
                })
                .catch((err)=>{
                    console.log(err);
                        changeMsg("⚠️ Something went wrong.")
                })
        }
        else{
            changeMsg("Enter input")
        }
    }

  return (
    <div className=' h-screen w-full flex items-center justify-center flex-col gap-7'>
       <div className=' bg-black/10 rounded-lg
         px-3 py-2 hover:bg-black/30 transition-all
          fixed left-7 top-7 flex gap-2 flex-col'>
            <p className=' text-3xl'>Test Page - 3</p> 
            <p className=' font-thin text-[#aaaaaa]'>Test Sign-up API</p>
        </div>
        <div>
            <p className=' text-3xl'>
                Test Sign-Up.
            </p>
        </div>
        <div className=' h-[450px] w-[400px] bg-[#454545] rounded-lg 
        flex flex-col px-10 py-5 gap-8 pt-14 font-thin tracking-widest'>

            <input  value={fullName}
            onChange={(e)=>{
                setFullname(e.target.value);
            }}
            className=' bg-[#fff]/0 py-2 border-b-2
             border-red-50/50 px-3 outline-none'
                type="text" placeholder=' Full Name ' />
            <input  value={mailAddress}
            onChange={(e)=>{
                setMailAddress(e.target.value);
            }}
            className=' bg-[#fff]/0 py-2 border-b-2 
             border-red-50/50 px-3 outline-none'
                type="mail" placeholder=' Mail Address ' />
            <input value={username}
            onChange={(e)=>{
                setUsername(e.target.value);
            }} 
            className=' bg-[#fff]/0 py-2 border-b-2 
             border-red-50/50 px-3 outline-none'
                type="text" placeholder=' Username ' />
            <input value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }} 
            className=' bg-[#fff]/0 py-2 border-b-2 
             border-red-50/50 px-3 outline-none'
                type="password" placeholder=' Password ' />
            <div className=' flex items-center justify-center '>
                <div onClick={handleSend} 
                className=' px-4 py-2 rounded-full
                 bg-indigo-800 hover:opacity-60 transition-all active:scale-75'>
                    SIGN UP
                </div>
            </div>
        </div>
        <div className=' text-center'>
            <p className=''>
                {message}
            </p>
        </div>
    </div>
  )
}

export default SignUPpage
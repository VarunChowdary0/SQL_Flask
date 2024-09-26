import React, { useState } from 'react'
import { sendInfo } from '../Controllers/SendDataTOApi';

const SendDataToServer:React.FC = () => {

    const myName = localStorage.getItem("myName")||"";

    const [text,setText] = useState<string>("");

    const [loading,setLoad] = useState<boolean>(false);

    const [message,setMessage] = useState<string>("")
    const sendData = () =>{
        if(myName.trim()!=="")
       {
        setLoad(true);
        sendInfo(text,myName)
                .then((res)=>{
                    console.log(res);
                    setLoad(false);
                    changeMsg("Data deliveried. ✅");
                    setText("");
                })
                .catch((err)=>{
                    setLoad(false);
                    changeMsg("⚠️ Delivery Failed, Try again.")
                    console.log(err);
                })
        }else{
            changeMsg("Please Enter give your name in Home page ⚠️")
        }
    }
    const changeMsg = (msg:string)=>{
        setMessage(msg);
        setTimeout(()=>{
            setMessage("");
        },2000)
    }
    return (
    <div className='min-h-screen w-full
    flex p-7 flex-col'>
        <div className=' bg-black/10 rounded-lg
         px-3 py-2 hover:bg-black/30 transition-all
          fixed left-7 top-7 flex gap-2 flex-col'>
            <p className=' text-3xl'>Test Page - 2</p> 
            <p className=' font-thin text-[#aaaaaa]'>Send Data to API</p>
        </div>
        <div className=' flex items-center justify-center'>
            <div className=' h-[200px] 
            w-[500px] bg-[#454545] rounded-lg'>
                <textarea className=' w-full h-full rounded-md 
                max-h-full min-h-[200px]
                max-w-full min-w-full
                bg-black/0 outline-none p-2 '
                placeholder='Enter Text' 
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                >
                </textarea>
            </div>
        </div>
        <div className=' flex items-center justify-center mt-24'>
            {
                loading ?
                <p>loading...</p>
                :
                <div onClick={sendData} className=' rounded-full bg-indigo-600 px-5 py-3 
                transition-all hover:opacity-60 active:scale-75'>
                    Submit
                </div>
            }
        </div>
        <p className=' text-center mt-14'>
            {message}
        </p>
    </div>
  )
}

export default SendDataToServer
import React, { useEffect, useState } from 'react'
import { AddNums } from '../Controllers/AddNumbersController';

const TestPage1:React.FC = () => {
    const [num1,setNum1] = useState<string>("");
    const [num2,setNum2] = useState<string>("");

    const [res,setRes] = useState<number|string|undefined|null>();
    const [errr,setErr] = useState<string>("");

    const [isLoading,setLoad] = useState<boolean>(false);

    const findAnswer = () =>{
        setRes(undefined);
        const a = parseFloat(num1);
        const b = parseFloat(num2)
        
        if(!Number.isNaN(a) && !Number.isNaN(b)){
            setLoad(true);
            AddNums(a,b)
                .then((res)=>{
                    setRes(res?.data.result)
                    setLoad(false);
                })
                .catch((er)=>{
                    console.log(er);
                    setLoad(false);
                    setErr("Something went wrong")
                })
        }
        else{
            setErr("Invalid Inputs ! ⚠️")
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            setErr("");
        },1500)
    },[errr])
    useEffect(()=>{
        setRes(undefined);
    },[num1,num2])
  return (
    <div className=' min-h-screen w-full
     flex p-7 flex-col'>
        <div className=' bg-black/10 rounded-lg
         px-3 py-2 hover:bg-black/30 transition-all
          fixed left-7 top-7 flex gap-2 flex-col'>
            <p className=' text-3xl'>Test Page - 1</p> 
            <p className=' font-thin text-[#aaaaaa]'>Sum of Numbers API</p>
        </div>
        <div className=' flex items-center justify-center'>
            <div className=' h-[200px] w-[500px] bg-[#454545] 
            rounded-lg mt-28 flex items-center flex-col p-7 gap-5'>
                <input onChange={(e)=>{
                    setNum1(e.target.value)
                }} onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        findAnswer();
                    }
                }}
                value={num1} className=' bg-[#fff]/0 py-2 border-b-2 px-5 outline-none'
                 type="text" placeholder='Enter first number ' />
                <input onChange={(e)=>{
                    setNum2(e.target.value)
                }}  onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        findAnswer();
                    }
                }}
                value={num2} className=' bg-[#fff]/0 py-2 border-b-2 px-5 outline-none'
                 type="text" placeholder='Enter second number ' />
            </div>
        </div>
        <div className=' flex justify-center mt-9'>
            {
                !isLoading ?
                <div onClick={findAnswer} className=' px-5 py-2 bg-indigo-600 rounded-full 
                transition-all active:scale-75 hover:cursor-pointer
                w-fit  hover:opacity-70'>Find</div>:
                <p className=' text-center'> Loading....</p>
            }
        </div>
        <div className=' flex flex-col items-center justify-center mt-10' >
            {(errr!=="")?
                <div className=' text-center'>
                    {errr}
            </div>
            :
           ( (res!==undefined) && <div className=' text-center text-green-700'>
                Sum of 
                <span className=' mx-2 text-white'>{parseFloat(num1)}</span>
                 and 
                 <span className=' mx-2 text-white'>{parseFloat(num2)}</span>
                  is ➡️
                <span className=' mx-2 text-white'>{res}</span>" .
            </div>)
            }
        </div>
    </div>
  )
}

export default TestPage1
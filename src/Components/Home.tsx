import React, { useEffect, useState } from 'react'
import { executeCommand } from '../Controllers/AllPurpousSQL';

const Home:React.FC = () => {
    const [myName,setName] = useState(localStorage.getItem("myName")||"");
    useEffect(()=>{
        localStorage.setItem("myName",myName);
    },[myName])
    useEffect(()=>{
        executeCommand("127.0.0.1","root","Varun@123#","moviesdb","SELECT * FROM actors")
            .then((res)=>{
                console.log(res.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    })
  return (
    <div className=' flex flex-col p-10 items-center justify-center w-full h-full pt-16 '>
        <div className=' fixed right-10 top-4 h-[100px] w-[200px]'>
            <input className=' 
            bg-black/0  px-4 py-1 tracking-widest
            border-b-2 border-white/40 outline-none
            ' 
            onChange={(e)=>{
                setName(e.target.value);
            }}
            value={myName}
            type="text" placeholder='Enter Your Name ... ' />
        </div>
        <p className=' text-3xl'>All Practices</p>
        { (myName.trim()!=="") && 
            <ul className=' flex  flex-col gap-4 mt-14 text-blue-400'>
                <li>
                    <a href="/test1">
                        <p className='  hover:underline'>
                            1. Sum of two Numbers Python flask REST API</p>
                    </a>
                </li>
                <li>
                    <a href="/test2">
                        <p  className='  hover:underline'>
                            2. Send Data to Python flask REST API</p>
                    </a>
                </li>
                <li>
                    <a href="/test3">
                        <p className='  hover:underline'>
                            3. Send Sign Up Data to Python flask REST API</p>
                    </a>
                </li>
                <li>
                    <a href="/test4">
                        <p className='  hover:underline'>
                            4. Get TABLE  Data from Python flask REST API</p>
                    </a>
                </li>
                <li>
                    <a href="/test5">
                        <p className='  hover:underline'>
                            5. Access any my SQL DataBase from Python flask REST API</p>
                    </a>
                </li>
                <li>
                    <a href="/test6">
                        <p className='  hover:underline'>
                            6. A Simple Money Manager</p>
                    </a>
                </li>
            </ul>
        }
    </div>
  )
}

export default Home
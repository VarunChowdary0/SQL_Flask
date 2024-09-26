import React, { useEffect, useState } from 'react'
import TableLine from './MiniCOmps/TableLine'
import axios from 'axios';
import { url } from '../Controllers/API_URL';

export const ReciveAllusersData:React.FC = () => {
    const [Data,setData] = useState([]);
    useEffect(()=>{
        axios.get(url+"getAllUsers")
            .then((res)=>{
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch((Err)=>{
                console.log(Err)
            })
    },[])
  return (
    <div className=' h-screen w-full px-20 py-16 flex  justify-center'>
      <div className=' bg-black/10 rounded-lg
         px-3 py-2 hover:bg-black/30 transition-all
          fixed left-7 top-7 flex gap-2 flex-col'>
            <p className=' text-3xl'>Test Page - 4</p> 
            <p className=' font-thin text-[#aaaaaa]'>Get Users Data API</p>
        </div>
        <div className=' w-fit h-fit flex flex-col bg-black/10'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Fullname
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mail address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        Data.map((ele,idx)=>
                            <TableLine
                                fulnme={ele[0]}
                                mail={ele[1]}
                                uzrnme={ele[2]}
                                pswd={ele[3]}
                            />
                        )
                       }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { executeCommand } from '../Controllers/AllPurpousSQL'
import AllPuropusTableRow from './MiniCOmps/AllPuropusTableRow'

const AllPurpousSQLrunner:React.FC = () => {
    const [host,setHost] = useState<string>(localStorage.getItem("host_run_sql")||"")
    const [username,setUsername] = useState<string>(localStorage.getItem("username_run_sql")||"")
    const [password,setPassword] = useState<string>(localStorage.getItem("password_run_sql")||"")
    const [db,setDB] = useState<string>(localStorage.getItem("db_run_sql")||"")
    const [sql_command,setSQL] = useState<string>(localStorage.getItem("command_run_sql")||"");
    const [TableName,setTable] = useState<string>(localStorage.getItem("coloum_Name_run_sql")||"");
    const [countMsg,setCountMsg] = useState<string>();

    const [COLUMNS,setCOLUMNS] = useState([[]]);

    const [error,setError] = useState<string>("");
    const [data,setData] = useState([[]]);

    const handleRUN = () =>{
        setCountMsg("");
        setError("")
        setData([[]])
        getTableNames();
        executeCommand(host,username,password,db,sql_command)
            .then((res)=>{
                if(res.status === 200){
                    console.log(res.data.data);
                    setData(res.data.data);
                    setCountMsg(`Number of colums retrived ➡️ ${res.data.data.length}.`)
                }
                else{
                    setError(res.data.error)
                    console.log(res.data.error)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const getTableNames = () =>{
        const cmd = "SHOW COLUMNS FROM "+TableName
        executeCommand(host,username,password,db,cmd)
            .then((res)=>{
                if(res.status === 200)
                {
                    console.log(res.data.data);
                    setCOLUMNS(res.data.data);
                }
                else{
                    console.log(res.data.error);
                    setError(res.data.error);
                }
            })
            .catch((err)=>{
                console.log(err);
                setError(err.data.error);
            })
    }

    

    useEffect(()=>{
        localStorage.setItem("host_run_sql",host);
        localStorage.setItem("username_run_sql",username);
        localStorage.setItem("password_run_sql",password);
        localStorage.setItem("db_run_sql",db);
        localStorage.setItem("command_run_sql",sql_command);
        localStorage.setItem("coloum_Name_run_sql",TableName);
    },[host,username,password,db,sql_command,TableName])

  return (
    <div className=' min-h-screen w-full p-10 pt-14 flex flex-col gap-10'>
        <div className=' bg-black/10 rounded-lg
         px-3 py-2 hover:bg-black/30 transition-all
          fixed left-7 top-7 flex gap-2 flex-col'>
            <p className=' text-3xl'>Test Page - 5</p> 
            <p className=' font-thin text-[#aaaaaa]'>SQL Runner Pyhton API</p>
        </div>
        <div className='_inputer_ mt-[100px] '>
            <div className=' h-[230px] w-full bg-white/10 rounded-xl
             px-5 py-2 flex flex-col gap-8 pb-5'>
                <div className=' flex gap-10'>
                    <input value={host}
                    onChange={(e)=>{
                        setHost(e.target.value);
                    }}
                    className=' bg-black/0 p-2 outline-none border-b-2'
                    type="text"
                    placeholder='host address Ex: 127.0.0.1' />

                    <input value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    className=' bg-black/0 p-2 outline-none border-b-2'
                    type="text"
                    placeholder='username' />

                    <input value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    className=' bg-black/0 p-2 outline-none border-b-2'
                    type="text"
                    placeholder='password' />

                    <input value={db}
                    onChange={(e)=>{
                        setDB(e.target.value);
                    }}
                    className=' bg-black/0 p-2 outline-none border-b-2'
                    type="text"
                    placeholder='database' />

                    <input value={TableName}
                    onChange={(e)=>{
                        setTable(e.target.value);
                    }}
                    className=' bg-black/0 p-2 outline-none border-b-2'
                    type="text"
                    placeholder='Table Name' />
                </div>
                <div className=' w-full flex items-center justify-center px-20 ' >
                    <input value={sql_command}
                    onChange={(e)=>{
                        setSQL(e.target.value)
                    }}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter"){
                            handleRUN();
                        }
                    }}
                    className=' py-2 w-full rounded-lg font-thin tracking-widest
                     text-lg bg-black/30 outline-none px-8' 
                    type="text"
                    placeholder='Enter SQL Command'
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <div onClick={handleRUN} className='px-4 py-2 bg-indigo-700 rounded-xl 
                    hover:opacity-70 transition-all active:scale-75'>
                        RUN 
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className=' w-full'>
                    <p className=' text-center mt-10 text-orange-600 pb-6'>
                        {error}
                    </p>
                    <p className=' text-xl text-center mt-10 text-green-700 pb-6'>
                        {countMsg}
                    </p>
               </div>
            

        <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right
             rounded-lg overflow-hidden
            text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            COLUMNS.map((ele,idx)=>
                            <th scope="col" className="px-6 py-3 ">
                                {ele[0]}
                            </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody >
                        {
                            data.map((ele,idx)=>
                                <AllPuropusTableRow data={ele}/>
                            )
                        }
                </tbody>
               

            </table>
        </div>
        </div>
    </div>
  )
}

export default AllPurpousSQLrunner
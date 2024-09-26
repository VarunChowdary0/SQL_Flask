import React, { useState } from 'react'
import AddExpencePopUp from './MiniCOmps/AddExpencePopUp'
import Segment_22 from './MiniCOmps/Segment_22';


const MoneyManager:React.FC = () => {
  const [showAdddPopUp,setShowPopUp] = useState<boolean>(false);
  const cxc = localStorage.getItem("mydata");
  const [myData,setMyData] = useState<[
        {
          title : string;
          Amount: number;
          saving: number;
        }
        ]>(cxc?JSON.parse(cxc) : []);
  return (
    <div className=" flex items-center font-thin 
    tracking-widest flex-col px-5 py-16">
      <div className=' bg-black/10 rounded-lg
         px-3 py-2 hover:bg-black/30 transition-all
          fixed left-7 top-7 flex gap-2 flex-col'>
            <p className=' text-3xl'>Test Page - 6</p> 
            <p className=' font-thin text-[#aaaaaa]'>Money manager</p>
        </div>
        <div className=' min-h-[200px] h-fit overflow-hidden 
        w-fit min-w-[500px] max-sm:min-w-0
         max-sm:w-screen overflow-x-auto rounded-lg bg-[#454545]'>
          <div className=' h-fit w-full bg-white/10 shadow-sm
          px-5 pb-2 flex items-center justify-around pt-2 '>
            {/* <input type="text" placeholder=' Monthly Salary'
             className='outline-none bg-black/0 border-b-2 px-3 py-1 pt-2'
            /> */}
            <div  onClick={()=>{
              setShowPopUp(true);
            }}
             className=' hover:opacity-75 hover:scale-105 active:scale-75 transition-all
             px-3 py-2 rounded-lg bg-indigo-600'>
              Add expence
            </div>
          </div>
          <div className=' flex-1 h-full w-full px-2 py-5'>
            <div className=' flex items-center justify-center
             flex-col gap-3 h-fit  px-1 py-1'>
              {
                myData.map((ele,idx)=>
                  <Segment_22 title={ele.title} Amount={ele.Amount} saving={ele.saving}/>
                )
              }
            </div>
          </div>
        </div>
        {
          showAdddPopUp &&
            <AddExpencePopUp myData={myData} setMyData={setMyData} closer={setShowPopUp}/>
        }
    </div>
  )
}

export default MoneyManager
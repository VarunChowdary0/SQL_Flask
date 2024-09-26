import React, { useState } from 'react'

interface currentProps{
    closer : React.Dispatch<React.SetStateAction<boolean>>;
    myData: [{
        title : string;
        Amount: number;
        saving: number;
      }];
    setMyData:React.Dispatch<React.SetStateAction<[ {
        title : string;
        Amount: number;
        saving: number;
      }] | any>>;
}

const AddExpencePopUp:React.FC<currentProps> = (props) => {
    const [title,setTitle] = useState<string>("");
    const [Samount,setS_amunnt] = useState<number>(0);
    const [Tamount,setT_amunnt] = useState<number>(0);
    
    const handleSave = () => {
        const Dobj = {
            title: title,
            Amount: Tamount,
            saving: Samount 
        };
    
        props.setMyData([Dobj]);
        props.closer(false)
    };
    
    
  return (
    <>
        <div 
        onClick={()=>{
            props.closer(false);
        }}
        className=' fixed top-0 bottom-0 right-0 left-0
            bg-black/10 backdrop-blur-sm'>
        </div>
        <div className='  z-50 fixed top-[40%]  flex items-center justify-center '>
            <div className='  top-[-100px] h-[300px] w-[300px] bg-[#ffffff] 
            px-3 py-4 rounded-lg relative shadow-2xl'>
                <div 
                onClick={()=>{
                    props.closer(false);
                }}
                className=' absolute top-1 hover:scale-125 transition-all
                 right-3 text-2xl text-black hover:cursor-pointer'>
                    x
                </div>
                <div className=' mt-10 bg-black/0 h-[200px] 
                w-full flex flex-col gap-5 text-black'>
                    <input type="text"
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                    className=' px-3 py-2 rounded-md 
                    border-2 border-[#929292]'
                    placeholder='Title of Expence'/>

                    <input type="number" onChange={(e)=>{
                        setS_amunnt(e.target.valueAsNumber);
                    }} min={1}
                    className=' px-3 py-2 rounded-md 
                    border-2 border-[#929292]'
                    placeholder='Monthly Saving Amount'/>

                    <input type="number" min={1} onChange={(e)=>{
                        setT_amunnt(e.target.valueAsNumber);
                    }}
                    className=' px-3 py-2 rounded-md 
                    border-2 border-[#929292]'
                    placeholder='Target Amount'/>

                <div onClick={handleSave} className=' text-white hover:opacity-75 hover:scale-105 
                active:scale-75 transition-all
                px-3 py-2 rounded-lg bg-indigo-600'>
                Save
            </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddExpencePopUp
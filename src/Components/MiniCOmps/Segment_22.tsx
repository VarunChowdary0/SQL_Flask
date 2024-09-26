import React, { useEffect, useState } from 'react';
import AllPuropusTableRow from './AllPuropusTableRow';

interface currentProps {
    title : string;
  Amount: number;
  saving: number;
}

const Segment_22: React.FC<currentProps> = (props) => {
  const [data, setData] = useState<
    {
      count: number;
      amount: number;
      left: number;
    }[]
  >([]);

  useEffect(() => {
    let Temp_val = 0;
    let temp_save = 0;
    let count = 0;
    const tempData = [];

    while (Temp_val <= props.Amount && Temp_val + props.saving < props.Amount) {
      count++;
      Temp_val += props.saving;
      const info = {
        count: count,
        amount: Temp_val,
        left: props.Amount - Temp_val
      };
      console.log(info);
      tempData.push(info);
    }

    if (Temp_val < props.Amount) {
      tempData.push({
        count: count + 1,
        amount: props.Amount,
        left: 0
      });
    }

    setData(tempData);
  }, [props.title,props.Amount]);

  const [showFull,setShow] = useState<boolean>(false);
  return (
    <div className={`w-full 
     relative bg-slate-600/40 rounded-md py-2 px-3 pb-10`}>
      <p className='text-center text-xl text-yellow-600 font-mono'>{props.title}</p>
      <div className='flex justify-around mt-3'>
        <div className='px-3 py-1 bg-teal-500 rounded-lg border-green-900'>
          <p>Target {props.Amount}</p>
        </div>
        <div className='px-3 py-1 rounded-lg bg-red-400'>
          <p>Monthly Saving {props.saving}</p>
        </div>
      </div>
      <div className={`mt-4  ${showFull?" h-fit":"  h-[100px] overflow-hidden"} `}>
        <table className='rounded-lg overflow-hidden'>
          <thead>
            <AllPuropusTableRow data={['Month Count', 'Current Amount', 'Required Amount']} />
          </thead>
          <tbody>
            {data.map((ele, idx) => (
              <AllPuropusTableRow key={idx} data={[ele.count, ele.amount+" .Rs", ele.left+" .Rs"]} />
            ))}
          </tbody>
        </table>
      </div>
        <div 
        onClick={()=>{
            setShow(!showFull)
        }}
         className=' px-2 py-0 bg-black/20 rounded-md hover:cursor-pointer
         absolute bottom-1 right-5 hover:bg-black/40 transition-all'>
            {
                showFull
                ?
                "less"
                :
                "more"
            }
        </div>
    </div>
  );
};

export default Segment_22;
